import create from "zustand";
import { persist } from "zustand/middleware";
import { nanoid } from "nanoid";

const useStore = create(
  persist(
    (set) => {
      return {
        games: [],

        getInitialGameState: async () => {
          const res = await fetch("/api/gamelist");
          const initialGamesList = await res.json();

          set((state) => {
            return {
              games: initialGamesList ?? [],
            };
          });
        },

        // append new card via form
        appendNewGame: async (type, name, date, time, place, court) => {
          const newGame = {
            id: nanoid(),
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
          const newGameObject = await res.json();

          set((state) => {
            return {
              games: [...state.games, newGameObject.addGameCard],
            };
          });
        },

        // delete card with "x"-icon in gamelist
        deleteGame: async (id) => {
          const response = await fetch(`/api/gamelist/${id}`, {
            method: "DELETE",
          });
          const deleteGameCard = await response.json();

          set((state) => {
            const gameListAfterDeletion = state.games.filter(
              (game) => game.id !== deleteGameCard._id
            );
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
