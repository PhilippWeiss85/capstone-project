import mongoose from "mongoose";

const { Schema } = mongoose;
const gameCardSchema = new Schema({
  id: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  place: { type: String, required: true },
  court: { type: String, required: true },
  results: { type: Object, required: true },
  gameresult: { type: String, required: true },
  set: { type: Array, required: true },
});

const GameCard = mongoose.models.GameCard || mongoose.model("Question", questionSchema);

export default GameCard;
