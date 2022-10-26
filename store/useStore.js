import create from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

const useStore = create((set) => {
  return {
    games: [
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
    ],

    // append new card via form
    appendNewGame: (type, name, date, time, place, court) => {
      set((state) => {
        const newGameList = [
          {
            id: nanoid(),
            type: type,
            name: name,
            date: date,
            time: time,
            place: place,
            court: court,
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
          ...state.games,
        ];
        return {
          games: newGameList,
        };
      });
    },

    // delete card with "x"-icon in gamelist
    deleteGame: (id) => {
      set((state) => {
        const gameListAfterDeletion = state.games.filter((game) => {
          return game.id !== id;
        });
        return {
          games: gameListAfterDeletion,
        };
      });
    },

    // used https://www.robinwieruch.de/react-update-item-in-list/ as tutorial
    updateGameDetail: (id, gameresult, set1, set2, set3) => {
      set((state) => {
        const updatedGameList = state.games.map((game) => {
          if (game.id === id) {
            const gameToUpdate = {
              ...game,
              results: {
                gameresult: gameresult,
                set: [set1, set2, set3],
              },
            };
            return gameToUpdate;
          }
          return game;
        });
        return {
          games: updatedGameList,
        };
      });
    },
  };
});

export default useStore;
