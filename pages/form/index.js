import GameCardForm from "../../components/Form/GameCardForm";
import styled from "styled-components";
import { useState } from "react";
import GameCard from "../../components/GameCard/GameCard";

export default function Form({ appendNewGameCard }) {
  const [gameList, setGameList] = useState([]);

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

  return (
    <>
      <StyledHeadline>Create a new card</StyledHeadline>
      <main>
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
        <GameCardForm appendNewGameCard={appendNewGameCard} />
      </main>
    </>
  );
}

const StyledHeadline = styled.h1`
  text-align: center;
  margin-bottom: 1em;
`;
