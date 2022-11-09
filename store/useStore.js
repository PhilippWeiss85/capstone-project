import create from "zustand";

const useStore = create((set) => {
  return {
    games: [],
    modal: false,

    activateModal: () => {
      set((state) => {
        return { modal: true };
      });
    },

    closeModal: () => {
      set((state) => {
        return { modal: false };
      });
    },

    getInitialGameState: async () => {
      const res = await fetch("/api/gamelist");
      const initialGamesList = await res.json();
      set((state) => {
        return {
          games: initialGamesList ?? [], // set initial games array to db fetch
        };
      });
    },

    // append new card via form
    appendNewGame: async (
      type,
      name,
      date,
      time,
      place,
      court,
      image,
      imageWidth,
      imageHeight
    ) => {
      const newGame = {
        type: type,
        name: name,
        date: date,
        time: time,
        place: place,
        court: court,
        image: image,
        imageWidth: imageWidth,
        imageHeight: imageHeight,
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
      }; // translate _id to id to prevent rendering issue in gamelist page (key prop)

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

      set((state) => {
        const updatedGameList = state.games.map((game) => {
          if (game.id === updateGameCardResult._id) {
            // match id with _id to return if statement properly

            const gameToUpdate = {
              ...game,
              results: updateGameCardResult.results,
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
