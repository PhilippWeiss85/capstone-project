import dbConnect from "../../../lib/dbConnect";
import GameCard from "../../../components/GameCard/GameCard";
import { getAllGameCards } from "../../../services/gameCardServices";

export default async function handler(request, response) {
  if (request.method === "GET") {
    const gameCards = await getAllGameCards();
    return response.status(200).json(gameCards);
  } else if (request.method === "POST") {
    await dbConnect();

    const newData = JSON.parse(request.body);
    const newGameCard = await GameCard.create(newData);

    console.log(newGameCard);

    return response.status(201).json({ message: "Gamecard created", newGameCard });
  } else {
    response.status(403).json({ message: "Error: request method not allowed" });
  }
}
