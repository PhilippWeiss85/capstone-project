import GameCard from "../../components/GameCard/GameCard";
import styled from "styled-components";
import Link from "next/link";
import AnchorLink from "../../components/StyledLink";

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
    <>
      <header>
        <h1>Your Gameplan</h1>
      </header>
      <main>
        {games.map((game) => {
          return (
            <GameCard
              key={game.id}
              type={game.type}
              name={game.name}
              date={game.date}
              time={game.time}
              place={game.place}
              court={game.court}
            />
          );
        })}
        <Link href="/form" passHref>
          <AnchorLink>Add New Match</AnchorLink>
        </Link>
      </main>
    </>
  );
}
