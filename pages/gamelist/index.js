import styled from "styled-components";
import useStore from "../../store/useStore";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import PieChart from "../../components/Charts/PieChart";
import BarChart from "../../components/Charts/BarChart";
import { ChartContainer } from "../../components/Charts/CanvasContainer";
import { PuffLoader } from "react-spinners";

import { BsSortDown } from "react-icons/bs";
import SortGames from "../../components/SortGames/SortGames";

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
  const toggleSortMenu = useStore((state) => state.toggleSortMenu);
  const sortIcon = useStore((state) => state.sortIcon);
  const isLoading = useStore((state) => state.isLoading);

  return (
    <>
      {isLoading === true ? (
        <LoaderContainer>
          <PuffLoader color="#BBF244" loading size={300} speedMultiplier={1.4} />
        </LoaderContainer>
      ) : (
        <MainWrapper>
          <SortIcon onClick={toggleSortMenu}>
            <BsSortDown />
          </SortIcon>
          {sortIcon && (
            <SortMenu>
              <SortGames />
            </SortMenu>
          )}

          <StatisticWrapper>
            <ChartContainer>
              <PieChart />
            </ChartContainer>
            <ChartContainer>
              <BarChart />
            </ChartContainer>
          </StatisticWrapper>

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
                image={game.image}
              />
            );
          })}
        </MainWrapper>
      )}
    </>
  );
}

const LoaderContainer = styled.section`
  max-width: 640px;
  margin: 3em auto;
  display: flex;
  height: 300px;
  align-items: center;
  justify-content: center;
`;

const MainWrapper = styled.main`
  max-width: 640px;
  margin: 0 auto;
`;

const SortIcon = styled.button`
  position: absolute;
  right: 0;
  top: 5px;
  height: 50px;
  width: 50px;
  background: none;
  border: none;
  font-size: 1.5em;
  color: var(--text-navigation);

  &:hover {
    color: var(--text-secondary);
  }
`;

const SortMenu = styled.section`
  position: absolute;
  right: 0;
  top: 3.7em;
`;

const StatisticWrapper = styled.section`
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: var(--background-navigation);
  }
`;
