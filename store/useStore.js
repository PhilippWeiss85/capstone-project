import create from "zustand/react";

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

    appendNewGameCard: (type, name, date, time, place, court) => {
      set((state) => {
        const newGameList = state.games.map((game) => {
          return [
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
            ...game,
          ];
        });
        return {
          games: newGameList,
        };
      });
    },

    deleteCard: (id) => {
      set((state) => {
        const cardListAfterDeletion = games.filter((game) => {
          return game.id !== id;
        });
        return {
          games: cardListAfterDeletion,
        };
      });
    },
  };
});

export default useStore;
