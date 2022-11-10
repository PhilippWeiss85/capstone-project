import styled from "styled-components";
import useStore from "../../store/useStore";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import PieChart from "../../components/Charts/PieChart";
import BarChart from "../../components/Charts/BarChart";
import { ChartContainer } from "../../components/Charts/CanvasContainer";
import { FaSort } from "react-icons/fa";
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

  function sortGamesByName() {
    gameList.sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
    });
    toggleSortMenu(); // if you disable this code the list rerenders only after closing the toggleMenu
  }

  return (
    <>
      <MainWrapper>
        <SortIcon onClick={toggleSortMenu}>
          <FaSort />
        </SortIcon>
        {sortIcon && (
          <SortMenu>
            <SortGames sortGamesByName={sortGamesByName} />
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
    </>
  );
}

const MainWrapper = styled.main`
  max-width: 640px;
  margin: 0 auto;
`;

const SortIcon = styled.button`
  position: absolute;
  right: 1em;
  top: 18px;
  background: none;
  border: none;
  font-size: 1.5em;
  color: var(--text-navigation);
`;

const SortMenu = styled.section`
  background-color: red;
  position: absolute;
  right: 0;
  top: 3em;
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
