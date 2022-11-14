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
          <TextContent>{description}</TextContent>
        </ArticleWrapper>
        <ArticleWrapper>
          <SubHeadline>Key Concepts</SubHeadline>
          <ListWrapper>
            <ListItem>
              <StyledSpan>Grip</StyledSpan>
              {step1}
            </ListItem>
            <ListItem>
              <StyledSpan>Stance/Position</StyledSpan> {step2}
            </ListItem>
            <ListItem>
              <StyledSpan>Swingpath</StyledSpan>
              {step3}
            </ListItem>
            <ListItem>
              <StyledSpan>Additional Information</StyledSpan> {step4}
            </ListItem>
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
  padding: 1em 0 0 0;
  margin: 0;
`;

const TextContent = styled.p`
  background: var(--background-secondary);
  padding: 1em;
  margin: 1em 0 0 0;
  border-radius: 0;
`;

const ArticleWrapper = styled.article`
  gap: 1em;
  padding-top: 1em;
  overflow-x: hidden;
  padding: 0 1em;
`;

const ListWrapper = styled.ul`
  list-style: none;
`;

const StyledSpan = styled.span`
  color: var(--text-primary);
  border-radius: 0;
  font-weight: 700;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  padding: 0.5em 1.5em;
  background-color: var(--background-secondary);
`;
