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
        <StyledHeadline>Your Statistics</StyledHeadline>
        <StatisticWrapper>
          <CanvasContainer>
            <PieChart />
          </CanvasContainer>
          <CanvasContainer>
            <LineChart />
            <LineChart />
          </CanvasContainer>
        </StatisticWrapper>
        <StyledHeadline>Your Games</StyledHeadline>
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

const StyledHeadline = styled.h2`
  text-align: center;
  padding: 0;
  margin: 1em 0;
`;

const StatisticWrapper = styled.section`
  padding: 1em 0;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: var(--background-secondary);
  }
`;
