import Image from "next/image";
import Link from "next/link";
import { getAllLessons } from "../../lib/db";

export async function getStaticProps() {
  const lessons = await getAllLessons();

  return {
    props: { lessons: lessons },
  };
}

export default function LessonsList({ lessons }) {
  return (
    <>
      <h1>Your Training Progress</h1>
      <>
        {lessons.map((lesson) => (
          <section key={lesson.id}>
            <h2>{lesson.name}</h2>
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
          </section>
        ))}
      </>
    </>
  );
}
