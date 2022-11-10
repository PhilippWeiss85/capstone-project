import styled from "styled-components";

export default function SortGames({ sortGamesByName }) {
  return (
    <>
      <FilterContainer>
        <FilterButton onClick={sortGamesByName}>Name </FilterButton>
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
