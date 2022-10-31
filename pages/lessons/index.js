import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import dbConnect from "../../lib/dbConnect";
import { getAllLessons } from "../../services/lessonServices";

export async function getStaticProps() {
  await dbConnect();
  const lessons = await getAllLessons();

  return {
    props: { lessons: lessons },
  };
}

export default function LessonsList({ lessons }) {
  return (
    <MainWrapper>
      <h1>Your Training Progress</h1>
      {lessons.map((lesson) => (
        <LessonContainer key={lesson.id}>
          <Link href={`/lessons/${lesson.name}`}>
            <StyledH2>{lesson.name.toUpperCase()}</StyledH2>
          </Link>
          <Link href={`/lessons/${lesson.name}`}>
            <a>
              <Image
                src={lesson.image}
                alt={lesson.alt}
                layout="responsive"
                objectFit="contain"
                width={1710}
                height={1198}
              />
            </a>
          </Link>
        </LessonContainer>
      ))}
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  margin: 10vw;
`;

const StyledH2 = styled.h2`
  position: absolute;
  bottom: 0;
  z-index: 100;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0.3));
  color: #ffffff;
  width: 100%;
  padding: 0.4em;

  &:hover {
    background-color: red;
    cursor: pointer;
  }

  &:active {
    background-color: black;
  }
`;

const LessonContainer = styled.section`
  margin: 2em auto;
  position: relative;
  &:hover {
  }

  &:active {
    box-shadow: 2px 2px 2px red;
  }
`;
