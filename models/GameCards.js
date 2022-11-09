import mongoose from "mongoose";

const { Schema } = mongoose;
const gameCardSchema = new Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  place: { type: String, required: true },
  court: { type: String, required: true },
  image: { type: String, required: false },
  results: {
    gameresult: { type: String },
    set: { type: Array },
  },
});

const GameCard = mongoose.models.GameCard || mongoose.model("GameCard", gameCardSchema);

export default GameCard;
