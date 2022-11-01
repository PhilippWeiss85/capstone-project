import dbConnect from "../../../lib/dbConnect";
import GameCard from "../../../models/GameCards";

export default async function handler(request, response) {
  await dbConnect();

  const { id } = request.query;
  if (request.method === "GET") {
    const foundGame = await GameCard.findById(id);
    return response.status(200).json(foundGame);
  } else if (request.method === "DELETE") {
    const deletedGame = await GameCard.findByIdAndDelete(id);
    return response.status(201).json(deletedGame);
  } else if (request.method === "PATCH") {
    const results = JSON.parse(request.body);
    const updatedGameWithResults = await GameCard.findByIdAndUpdate(id, results, {
      new: true,
    });
    console.log(updatedGameWithResults);

    return response.status(201).json(updatedGameWithResults);
  } else {
    return response.status(403).json({ message: "stop" });
  }
}
