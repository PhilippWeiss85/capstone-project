import styled from "styled-components";
import { getLessonByName, getAllLessons } from "../../lib/db";
import Image from "next/image";

export async function getStaticPaths() {
  const lessons = await getAllLessons();
  const names = lessons.map((lesson) => lesson.name);

  return {
    paths: names.map((name) => ({ params: { name: name } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { name } = context.params;
  const lessons = await getLessonByName(name);

  return {
    props: {
      id: lessons.id,
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
        width={1024}
        height={512}
      />
      <ContentWrapper>
        <ArticleWrapper>
          <h2>Description</h2>
          <p>{description}</p>
        </ArticleWrapper>
        <ArticleWrapper>
          <h2>Steps</h2>
          <ListWrapper>
            <ListItem>Grip: {step1}</ListItem>
            <ListItem>{step2}</ListItem>
            <ListItem>{step3}</ListItem>
            <ListItem>{step4}</ListItem>
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
  display: flex;
  flex-direction: column;
  gap: 1em;
  padding-top: 1em;
`;

const ListWrapper = styled.ol`
  display: flex;
  flex-direction: column;
  padding: 0 1em;
`;

const ListItem = styled.li`
  padding-top: 1em;
`;
