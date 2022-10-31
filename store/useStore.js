import create from "zustand";
import { persist } from "zustand/middleware";
import { examplegames } from "../lib/db";
import { nanoid } from "nanoid";

const useStore = create(
  persist(
    (set) => {
      return {
        // games: examplegames,
        games: [],
        fetchGame: async (url) => {
          try {
            const repsonse = await fetch(url);
            console.log(repsonse);
            const data = await repsonse.json();
            set({ games: data.results });
          } catch (error) {
            console.log("this went wrong");
          }
        },
        // append new card via form
        appendNewGame: async (type, name, date, time, place, court) => {
          const newGame = {
            type: type,
            name: name,
            date: date,
            time: time,
            place: place,
            court: court,
            results: {
              gameresult: "",
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
          };

          const res = await fetch("/api/gamelist", {
            method: "POST",
            body: JSON.stringify(newGame),
          });

          set((state) => {
            const newGameList = [
              res.json().addGameCard,

              // {
              //   id: nanoid(),
              //   type: type,
              //   name: name,
              //   date: date,
              //   time: time,
              //   place: place,
              //   court: court,
              //   results: {
              //     gameresult: undefined,
              //     set: [
              //       {
              //         Player1: "",
              //         Player2: "",
              //       },
              //       {
              //         Player1: "",
              //         Player2: "",
              //       },
              //       {
              //         Player1: "",
              //         Player2: "",
              //       },
              //     ],
              //   },
              // },
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
            const gameListAfterDeletion = state.games.filter((game) => game.id !== id);
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
    },
    {
      name: "GameCard",
    }
  )
);

export default useStore;
