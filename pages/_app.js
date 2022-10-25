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
    results: {
      gameresult: undefined,
      set: [
        {
          Player1: "",
          Player2: "",
        },
        {
          Player1: "",
          Player2: "",
        },
        {
          Player1: "",
          Player2: "",
        },
      ],
    },
  },
  {
    id: nanoid(),
    type: "Training",
    name: "Sonja",
    date: "2022-15-01",
    time: "20:00",
    place: "Fidelopark",
    court: "Sand",
    results: {
      gameresult: undefined,
      set: [
        {
          Player1: "",
          Player2: "",
        },
        {
          Player1: "",
          Player2: "",
        },
        {
          Player1: "",
          Player2: "",
        },
      ],
    },
  },
  {
    id: nanoid(),
    type: "Match",
    name: "Steffi",
    date: "2022-20-01",
    time: "10:00",
    place: "Sportscheck",
    court: "Gras",
    results: {
      gameresult: undefined,
      set: [
        {
          Player1: "",
          Player2: "",
        },
        {
          Player1: "",
          Player2: "",
        },
        {
          Player1: "",
          Player2: "",
        },
      ],
    },
  },
];

function MyApp({ Component, pageProps }) {
  const [gameList, setGameList] = useState(games);

  function appendNewGameCard(type, name, date, time, place, court, results) {
    const newGameList = [
      {
        id: nanoid(),
        type: type,
        name: name,
        date: date,
        time: time,
        place: place,
        court: court,
        results: results,
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

  // used https://www.robinwieruch.de/react-update-item-in-list/ as tutorial
  function updateCardDetail(id, gameresult, set1, set2, set3) {
    const updatedCardList = gameList.map((game) => {
      if (game.id === id) {
        const cardToUpdate = {
          ...game,
          results: {
            gameresult: gameresult,
            set: [set1, set2, set3],
          },
        };
        return cardToUpdate;
      }
      return game;
    });
    setGameList(updatedCardList);
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
        updateCardDetail={updateCardDetail}
      />
    </>
  );
}

export default MyApp;
