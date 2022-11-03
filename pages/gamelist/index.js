import styled from "styled-components";
import useStore from "../../store/useStore";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import PieChart from "../../components/Charts/PieChart";
import LineChart from "../../components/Charts/LineChart";
import { CanvasContainer } from "../../components/Charts/CanvasContainer";

export default function GameList() {
  const DynamicGameCard = dynamic(() => import("../../components/GameCard/GameCard"), {
    ssr: false,
  }); // to prevent rendering hydration error: https://nextjs.org/docs/advanced-features/dynamic-import

  // useState and useEffect
  const getInitialGameState = useStore((state) => state.getInitialGameState);
  useEffect(() => {
    getInitialGameState();
  }, [getInitialGameState]);
  const gameList = useStore((state) => state.games);

  return (
    <>
      <MainWrapper>
        <h3>Your GameStatistics</h3>
        <CanvasContainer>
          <PieChart />
          <LineChart />
        </CanvasContainer>
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
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.main`
  max-width: 640px;
  margin: 0 auto;
`;
