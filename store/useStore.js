import create from "zustand";
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
    appendNewGameCard: (type, name, date, time, place, court) => {
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
    deleteCard: (id) => {
      set((state) => {
        const cardListAfterDeletion = state.games.filter((game) => {
          return game.id !== id;
        });
        return {
          games: cardListAfterDeletion,
        };
      });
    },

    // used https://www.robinwieruch.de/react-update-item-in-list/ as tutorial
    updateCardDetail: (id, gameresult, set1, set2, set3) => {
      set((state) => {
        const updatedCardList = state.games.map((game) => {
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
        return {
          games: updatedCardList,
        };
      });
    },
  };
});

export default useStore;
