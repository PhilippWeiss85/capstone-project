import GameCard from "../../components/GameCard/GameCard";

const games = [
  {
    id: Math.random().toString(20).substring(3),
    type: "Match",
    name: "Max",
    date: "22.01.10",
    time: "19:00",
    place: "Rothof",
    court: "Carpet",
  },
  {
    id: Math.random().toString(20).substring(3),
    type: "Training",
    name: "Sonja",
    date: "22.01.15",
    time: "20:00",
    place: "Fidelopark",
    court: "Sand",
  },
  {
    id: Math.random().toString(20).substring(3),
    type: "Match",
    name: "Steffi",
    date: "22.01.20",
    time: "10:00",
    place: "Sportscheck",
    court: "Gras",
  },
];

export default function Gameplan() {
  return (
    <main>
      <h2>Your Gameplan</h2>
      {games.map((game) => {
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
          />
        );
      })}
    </main>
  );
}
