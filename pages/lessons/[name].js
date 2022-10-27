import { getLessonByName, getAllLessons } from "../../lib/db";
import Image from "next/image";

export function getStaticPaths() {
  const lessons = getAllLessons();
  const names = lessons.map((lesson) => lesson.name);

  return {
    paths: names.map((name) => ({ params: { name: name } })),
    fallback: false,
  };
}

export function getStaticProps(context) {
  const { name } = context.params;
  const lessons = getLessonByName(name);

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
    <>
      <h1>{name}</h1>
      <section>
        <Image
          src={image}
          alt={alt}
          layout="responsive"
          objectFit="contain"
          width={1024}
          height={512}
        />
        <article>
          <ul>
            <li>{step1}</li>
            <li>{step2}</li>
            <li>{step3}</li>
            <li>{step4}</li>
          </ul>
        </article>
      </section>
    </>
  );
}
