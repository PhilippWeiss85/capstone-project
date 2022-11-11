import styled from "styled-components";
import Image from "next/image";
import dbConnect from "../../lib/dbConnect";
import { getAllLessons, getLessonByName } from "../../services/lessonServices";

export async function getStaticPaths() {
  dbConnect();
  const lessons = await getAllLessons();
  const names = lessons.map((lesson) => lesson.name);

  return {
    paths: names.map((name) => ({ params: { name: name } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  dbConnect();
  const { name } = context.params;
  const lessons = await getLessonByName(name);

  return {
    props: {
      name: lessons.name,
      description: lessons.description,
      image: lessons.image,
      alt: lessons.alt,
      step1: lessons.step1,
      step2: lessons.step2,
      step3: lessons.step3,
      step4: lessons.step4,
    },
  };
}

export default function SingleLesson({
  name,
  description,
  image,
  alt,
  step1,
  step2,
  step3,
  step4,
}) {
  return (
    <MainWrapper>
      <h1>THE {name.toUpperCase()}</h1>

      <Image
        src={image}
        alt={alt}
        layout="responsive"
        objectFit="cover"
        width={1710}
        height={1198}
        priority="true"
      />
      <section>
        <ArticleWrapper>
          <SubHeadline>Description</SubHeadline>
          <TextContent>{description}</TextContent>
        </ArticleWrapper>
        <ArticleWrapper>
          <SubHeadline>Steps</SubHeadline>
          <ListWrapper>
            <ListItem>Grip: {step1}</ListItem>
            <ListItem>Stance/Position: {step2}</ListItem>
            <ListItem>Swing: {step3}</ListItem>
            <ListItem>Follow Through: {step4}</ListItem>
          </ListWrapper>
        </ArticleWrapper>
      </section>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  max-width: 640px;
  margin: 0 auto;
`;

const SubHeadline = styled.h2`
  padding: 0;
  margin: 0;
`;

const TextContent = styled.p`
  background: var(--background-primary);
  padding: 1em;
  box-shadow: 0 2px 0 var(--background-tertiary);
  border-radius: 0;
`;

const ArticleWrapper = styled.article`
  gap: 1em;
  padding-top: 1em;
  overflow-x: hidden;
  margin: 1em 0 2em 0;
  padding: 0 1em;
`;

const ListWrapper = styled.ol`
  padding: 1em 2em;
  background: red;
`;

const ListItem = styled.li`
  padding-top: 1em;
`;
