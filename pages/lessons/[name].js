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
      <h1>The tennis {name}</h1>

      <Image
        src={image}
        alt={alt}
        layout="responsive"
        objectFit="cover"
        width={1710}
        height={1198}
      />
      <ContentWrapper>
        <ArticleWrapper>
          <h2>Description</h2>
          <p>{description}</p>
        </ArticleWrapper>
        <ArticleWrapper>
          <h2>Steps</h2>
          <ListWrapper>
            <ListItem>
              <span>Grip:</span> {step1}
            </ListItem>
            <ListItem>Stance/Position: {step2}</ListItem>
            <ListItem>Swing: {step3}</ListItem>
            <ListItem>Follow Through: {step4}</ListItem>
          </ListWrapper>
        </ArticleWrapper>
      </ContentWrapper>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  margin: 10vw;
`;

const ContentWrapper = styled.section`
  padding: 1em;
`;

const ArticleWrapper = styled.article`
  gap: 1em;
  padding-top: 1em;
  overflow: hidden;
`;

const ListWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  padding: 0 1em;
`;

const ListItem = styled.li`
  padding-top: 1em;
`;
