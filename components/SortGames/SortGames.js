import styled from "styled-components";
import { FaSort } from "react-icons/fa";
import useStore from "../../store/useStore";

export default function SortGames() {
  const sortGamesByName = useStore((state) => state.sortGamesByName);
  const sortGamesByType = useStore((state) => state.sortGamesByType);
  const sortGamesByResult = useStore((state) => state.sortGamesByResult);

  const nameToggle = useStore((state) => state.nameToggle);
  const typeToggle = useStore((state) => state.typeToggle);
  const resultToggle = useStore((state) => state.resultToggle);

  return (
    <>
      <FilterContainer>
        <FilterButton onClick={sortGamesByName}>
          {nameToggle === false ? <FaSort /> : <FaSort />}
          <p> Name</p>
        </FilterButton>
        <FilterButton onClick={sortGamesByType}>
          {typeToggle === false ? <FaSort /> : <FaSort />}
          <p>Type</p>
        </FilterButton>
        <FilterButton onClick={sortGamesByResult}>
          {resultToggle === false ? <FaSort /> : <FaSort />}
          <p>Result</p>
        </FilterButton>
      </FilterContainer>
    </>
  );
}

const DefaultToggleIcon = styled.svg`
  z-index: -100;
`;

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
