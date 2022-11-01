import create from "zustand";
import { persist } from "zustand/middleware";

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
          const newGameObject = await res.json(); // includes message & addGameCard from api/gamelist

          const sanitizedNewGameObject = {
            ...newGameObject.addGameCard,
            id: newGameObject.addGameCard._id,
          };

          set((state) => {
            return {
              games: [...state.games, sanitizedNewGameObject],
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
        updateGameDetail: async (id, gameresult, set1, set2, set3) => {
          const updatedGameCard = {
            results: {
              gameresult: gameresult,
              set: [set1, set2, set3],
            },
          };

          const response = await fetch(`api/gamelist/${id}`, {
            method: "PATCH",
            body: JSON.stringify(updatedGameCard),
          });
          const updateGameCardResult = await response.json();
          console.log(updateGameCardResult);

          set((state) => {
            const updatedGameList = state.games.map((game) => {
              if (game.id === updateGameCardResult._id) {
                console.log(game);
                const gameToUpdate = {
                  ...game,
                  results: updateGameCardResult.results,
                };
                console.log("gametoUpdate", gameToUpdate);
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
