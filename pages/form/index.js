import GameCardForm from "../../components/Form/GameCardForm";
import GameCard from "../../components/GameCard/GameCard";
import styled from "styled-components";
import { useState } from "react";

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

export default function Form() {
  const [gameList, setGameList] = useState(games);

  function appendNewGameCard(type, name, date, time, place, court) {
    const newGameList = [
      ...gameList,
      {
        id: Math.random().toString(20).substring(3),
        type: type,
        name: name,
        date: date,
        time: time,
        place: place,
        court: court,
      },
    ];
    setGameList(newGameList);
  }

  console.log("mainform", gameList);
  return (
    <>
      <StyledHeadline>hello world</StyledHeadline>
      <main>
        <GameCardForm appendNewGameCard={appendNewGameCard} />
        {gameList.map((game) => {
          return (
            <GameCard
              key={game.id}
              type={game.type}
              name={game.name}
              date={game.date}
              time={game.time}
              place={game.place}
              court={game.court}
            />
          );
        })}
      </main>
    </>
  );
}

const StyledHeadline = styled.h1`
  text-align: center;
  margin-bottom: 1em;
`;
