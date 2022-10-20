import GameCardForm from "../../components/Form/GameCardForm";
import { useState } from "react";
import GameCard from "../../components/GameCard/GameCard";

const games = [
  {
    id: Math.random().toString(20).substring(3),
    type: "Match",
    name: "Max",
    date: "22.01.10",
    time: "19:00",
    place: "Rothof",
    court: "Carpet",
  },
  {
    id: Math.random().toString(20).substring(3),
    type: "Training",
    name: "Sonja",
    date: "22.01.15",
    time: "20:00",
    place: "Fidelopark",
    court: "Sand",
  },
  {
    id: Math.random().toString(20).substring(3),
    type: "Match",
    name: "Steffi",
    date: "22.01.20",
    time: "10:00",
    place: "Sportscheck",
    court: "Gras",
  },
];

export default function Form({ appendNewGameCard }) {
  const [gameList, setGameList] = useState([games]);

  function appendNewGameCard(type, name, date, time, place, court) {
    const newGameList = [
      {
        id: Math.random().toString(20).substring(3),
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

  return (
    <>
      <h1>Create a new card</h1>
      <main>
        {gameList.map((game) => {
          return (
            <GameCard
              id={game.id}
              key={game.id}
              type={game.type}
              name={game.name}
              date={game.date}
              time={game.time}
              place={game.place}
              court={game.court}
              deleteCard={deleteCard}
            />
          );
        })}
        <GameCardForm appendNewGameCard={appendNewGameCard} />
      </main>
    </>
  );
}
