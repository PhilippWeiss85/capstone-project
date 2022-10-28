import dbConnect from "../lib/dbConnect";
import Lesson from "../models/Lessons";

export async function getAllLessons() {
  await dbConnect();

  const lessons = await Lesson.find();
  const sanitizedLessons = lessons.map((lesson) => ({
    id: lesson._id.toString(),
    name: lesson.name,
    description: lesson.description,
    image: lesson.image,
    alt: lesson.alt,
    step1: lesson.step1,
    step2: lesson.step2,
    step3: lesson.step3,
    step4: lesson.step4,
  }));
  return sanitizedLessons;
}
