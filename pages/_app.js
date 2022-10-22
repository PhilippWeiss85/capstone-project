import GlobalStyle from "../components/GlobalStyle";
import { nanoid } from "nanoid";
import { useState } from "react";

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

function MyApp({ Component, pageProps }) {
  const [gameList, setGameList] = useState(games);

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
  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        appendNewGameCard={appendNewGameCard}
        deleteCard={deleteCard}
        gameList={gameList}
        setGameList={setGameList}
      />
    </>
  );
}

export default MyApp;
