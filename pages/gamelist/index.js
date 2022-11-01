import Button from "../../components/Button";
import styled from "styled-components";
import { useRouter } from "next/router";
import useStore from "../../store/useStore";
import dynamic from "next/dynamic";
import { useEffect } from "react";

export default function GameList() {
  const getInitialGameState = useStore((state) => state.getInitialGameState);
  useEffect(() => {
    getInitialGameState();
  }, []);

  const gameList = useStore((state) => state.games);
  const router = useRouter();

  const DynamicGameCard = dynamic(() => import("../../components/GameCard/GameCard"), {
    ssr: false,
  }); // to prevent rendering hydration error: https://nextjs.org/docs/advanced-features/dynamic-import

  return (
    <>
      <MainWrapper>
        {gameList.map((game) => {
          return (
            <DynamicGameCard
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
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.main`
  max-width: 640px;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
