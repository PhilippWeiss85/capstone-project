import dbConnect from "../lib/dbConnect";
import GameCard from "../models/GameCards";

export async function getAllGameCards() {
  await dbConnect();

  const gameCard = await GameCard.find();
  const sanitizedGameCard = gameCard.map((game) => ({
    id: game._id.toString(),
    type: game.type,
    name: game.name,
    date: game.date,
    time: game.time,
    place: game.place,
    court: game.court,
    results: {
      gameresult: game.results.gameresult,
      set: [
        {
          Player1: game.results.set[0].Player1,
          Player2: game.results.set[0].Player2,
        },
        {
          Player1: game.results.set[1].Player1,
          Player2: game.results.set[1].Player2,
        },
        {
          Player1: game.results.set[2].Player1,
          Player2: game.results.set[2].Player2,
        },
      ],
    },
  }));
  return sanitizedGameCard;
}
