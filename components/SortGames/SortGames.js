import styled from "styled-components";
import useStore from "../../store/useStore";

export default function SortGames() {
  const sortGamesByName = useStore((state) => state.sortGamesByName);
  const sortGamesByType = useStore((state) => state.sortGamesByType);
  const sortGamesByResult = useStore((state) => state.sortGamesByResult);

  return (
    <>
      <FilterContainer>
        <FilterButton onClick={sortGamesByName}>Name</FilterButton>
        <FilterButton onClick={sortGamesByType}>Type</FilterButton>
        <FilterButton onClick={sortGamesByResult}>Result</FilterButton>
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
