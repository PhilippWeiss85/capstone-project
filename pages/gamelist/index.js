import GameCard from "../../components/GameCard/GameCard";

export default function GameList({ gameList, deleteCard }) {
  return (
    <main>
      {gameList.map((game) => {
        return (
          <GameCard
            key={game.id}
            id={game.id}
            type={game.type}
            name={game.name}
            date={game.date}
            time={game.time}
            place={game.place}
            court={game.court}
            deleteCard={deleteCard}
          />
        );
      })}
    </main>
  );
}
