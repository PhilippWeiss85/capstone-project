import useStore from "../../store/useStore";
import styled from "styled-components";

export default function SortGames() {
  const gameList = useStore((state) => state.games);

  const sortGamesByName = gameList.sort((a, b) => {
    const nameA = a.name;
    const nameB = b.name;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });

  const sortGamesByType = gameList.sort((a, b) => {
    const nameA = a.name;
    const nameB = b.name;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });

  const sortGamesByResult = gameList.sort((a, b) => {
    const nameA = a.name;
    const nameB = b.name;
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  });

  return (
    <>
      <FilterContainer>
        <FilterButton>Name </FilterButton>
        <FilterButton>Type</FilterButton>
        <FilterButton>Result</FilterButton>
      </FilterContainer>
    </>
  );
}

const FilterContainer = styled.section`
  background: var(--background-navigation);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 60px;
  align-items: flex-end;
  border-radius: 0;
`;

const FilterButton = styled.button`
  border: none;
  color: none;
  text-decoration: none;
  background: red;
  border-radius: 0;
  margin: 2px;
`;
