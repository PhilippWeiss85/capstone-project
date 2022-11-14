import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import dbConnect from "../../lib/dbConnect";
import { getAllLessons } from "../../services/lessonServices";
import { motion } from "framer-motion";

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
      <motion.div
        initial={{ opacity: 0, scale: 0.5, y: -100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{
          duration: 0.3,
          delay: 0.2,
          ease: [0.1, 0.71, 0.4, 1],
        }}
      >
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
      </motion.div>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  margin: 0 10vw;
`;

const StyledH2 = styled.h2`
  position: absolute;
  bottom: -16px;
  z-index: 100;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0.3));
  color: #ffffff;
  width: 100%;
  padding: 0.4em;
  font-weight: normal;
  &:hover {
    transition: 0.1s ease-in;
    background: var(--background-lessons-hover);
    cursor: pointer;
  }
`;

const LessonContainer = styled.section`
  margin: 2em auto;
  max-width: 640px;
  position: relative;
`;
