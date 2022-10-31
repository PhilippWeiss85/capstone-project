import mongoose from "mongoose";

const { Schema } = mongoose;
const gameCardSchema = new Schema({
  // id: { type: String, required: true },
  type: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  place: { type: String, required: true },
  court: { type: String, required: true },
  // results: { type: Object, required: true },
  results: {
    gameresult: { type: String },
    set: { type: Array },
  },
});

const GameCard = mongoose.models.GameCard || mongoose.model("GameCard", gameCardSchema);

export default GameCard;
