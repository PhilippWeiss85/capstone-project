import styled from "styled-components";
import { FaSort } from "react-icons/fa";
import useStore from "../../store/useStore";

export default function SortGames() {
  const sortGamesByName = useStore((state) => state.sortGamesByName);
  const sortGamesByType = useStore((state) => state.sortGamesByType);
  const sortGamesByResult = useStore((state) => state.sortGamesByResult);

  return (
    <>
      <FilterContainer>
        <FilterButton onClick={sortGamesByName}>
          <FaSort /> Name
        </FilterButton>
        <FilterButton onClick={sortGamesByType}>
          <FaSort /> Type
        </FilterButton>
        <FilterButton onClick={sortGamesByResult}>
          <FaSort /> Result
        </FilterButton>
      </FilterContainer>
    </>
  );
}

const FilterContainer = styled.section`
  background: rgba(1, 35, 64, 1) 53%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80px;
  padding: 0.3em;
  align-items: flex-start;
  border-radius: 0;
  border-bottom-left-radius: 5px;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  color: var(--text-primary);
  text-align: left;
  width: 80%;
  padding: 2px;
  text-decoration: none;
  border-radius: 0;
  margin: 4px;
  background-color: var(--background-secondary);

  &:hover {
    background-color: var(--background-navigation);
    color: var(--text-navigation);
    box-shadow: 0px 2px 0px #fff;
  }
`;
