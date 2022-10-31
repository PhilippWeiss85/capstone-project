import dbConnect from "../../../lib/dbConnect";
import GameCard from "../../../models/GameCards";
import { getAllGameCards } from "../../../services/gameCardServices";

export default async function handler(request, response) {
  if (request.method === "GET") {
    const gameCards = await getAllGameCards();
    return response.status(200).json(gameCards);
  } else if (request.method === "POST") {
    await dbConnect();
    const newGame = JSON.parse(request.body);
    console.log(newGame);
    const addGameCard = await GameCard.create(newGame);
    return response.status(201).json({ message: "Gamecard created", addGameCard });
  } else {
    response.status(403).json({ message: "Error: request method not allowed" });
  }
}
