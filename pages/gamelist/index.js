import Button from "../../components/Button";
import GameCard from "../../components/GameCard/GameCard";
import styled from "styled-components";
import { useRouter } from "next/router";
import useStore from "../../store/useStore";

export default function GameList() {
  const gameList = useStore((state) => state.games);
  const router = useRouter();

  return (
    <>
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
              results={game.results}
            />
          );
        })}
        <ButtonContainer>
          <Button handleClick={() => router.push("/form")}>Add new card</Button>
        </ButtonContainer>
      </main>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
