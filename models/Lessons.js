import mongoose from "mongoose";

const { Schema } = mongoose;
const lessonSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true },
  alt: { type: String, required: true },
  step1: { type: String, required: true },
  step2: { type: String, required: true },
  step3: { type: String, required: true },
  step4: { type: String, required: true },
});

const Lesson = mongoose.models.Lesson || mongoose.model("Lesson", lessonSchema);

export default Lesson;
