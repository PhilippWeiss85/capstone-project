import GameCardForm from "../../components/Form/GameCardForm";
import { useState } from "react";
import GameCard from "../../components/GameCard/GameCard";
import { nanoid } from "nanoid";
import CardDetails from "../../components/CardDetail/CardDetail";

const games = [
  {
    id: nanoid(),
    type: "Match",
    name: "Max",
    date: "2022-10-01",
    time: "19:00",
    place: "Rothof",
    court: "Carpet",
  },
  {
    id: nanoid(),
    type: "Training",
    name: "Sonja",
    date: "2022-15-01",
    time: "20:00",
    place: "Fidelopark",
    court: "Sand",
  },
  {
    id: nanoid(),
    type: "Match",
    name: "Steffi",
    date: "2022-20-01",
    time: "10:00",
    place: "Sportscheck",
    court: "Gras",
  },
];

export default function Form({ appendNewGameCard }) {
  const [gameList, setGameList] = useState(games);
  const [cardDetails, setCardDetails] = useState();

  function appendNewGameCard(type, name, date, time, place, court) {
    const newGameList = [
      {
        id: nanoid(),
        type: type,
        name: name,
        date: date,
        time: time,
        place: place,
        court: court,
      },
      ...gameList,
    ];
    setGameList(newGameList);
  }

  function deleteCard(id) {
    const cardListAfterDeletion = gameList.filter((game) => {
      return game.id !== id;
    });
    setGameList(cardListAfterDeletion);
  }

  function toggleDetails(id) {
    const cardDetailList = gameList.filter((game) => game.id === id);
    setCardDetails(cardDetailList);
  }

  return (
    <>
      <h1>Create a new card</h1>
      <main>
        {gameList.map((game) => {
          return (
            <GameCard
              key={game.id}
              id={game.id}
              type={game.type}
              name={game.name}
              date={game.date}
              time={game.time}
              place={game.place}
              court={game.court}
              deleteCard={deleteCard}
              toggleDetails={toggleDetails}
            />
          );
        })}
        <GameCardForm appendNewGameCard={appendNewGameCard} />
      </main>
    </>
  );
}
