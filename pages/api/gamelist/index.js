import dbConnect from "../../../lib/dbConnect";
import GameCard from "../../../models/GameCards";

export default async function handler(request, response) {
  if (request.method === "GET") {
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
    // const gameCards = await getAllGameCards();
    return response.status(200).json(sanitizedGameCard);
  } else if (request.method === "POST") {
    await dbConnect();
    const newGame = JSON.parse(request.body);
    // console.log(newGame);
    const addGameCard = await GameCard.create(newGame);
    // console.log(addGameCard);
    return response
      .status(201)
      .json({ message: "Gamecard created", addGameCard: addGameCard });
  } else {
    response.status(403).json({ message: "Error: request method not allowed" });
  }
}
