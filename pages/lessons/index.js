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
          <h2>{lesson.name.toUpperCase()}</h2>
          <Link href={`/lessons/${lesson.name}`}>
            <a>
              <Image
                src={lesson.image}
                alt={lesson.alt}
                layout="responsive"
                objectFit="contain"
                width={1024}
                height={512}
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

const LessonContainer = styled.section`
  margin: 2em auto;
`;
