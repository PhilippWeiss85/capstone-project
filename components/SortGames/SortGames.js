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
      <SortContainer>
        <SortButton onClick={sortGamesByName}>
          {nameToggle === false ? <FaSort /> : <FaSort />}
          <p> Name</p>
        </SortButton>
        <SortButton onClick={sortGamesByType}>
          {typeToggle === false ? <FaSort /> : <FaSort />}
          <p>Type</p>
        </SortButton>
        <SortButton onClick={sortGamesByResult}>
          {resultToggle === false ? <FaSort /> : <FaSort />}
          <p>Result</p>
        </SortButton>
      </SortContainer>
    </>
  );
}

const SortContainer = styled.section`
  background: rgba(1, 35, 64, 1) 53%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95px;
  padding: 0.3em 1em 0.3em 0.3em;
  align-items: flex-start;
  border-radius: 0;
  border-bottom-left-radius: 5px;
`;

const SortButton = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid var(--text-secondary);
  color: var(--background-navigation);
  text-align: left;
  width: 100%;
  padding: 2px;
  text-decoration: none;
  border-radius: 0;
  margin: 4px;
  background-color: var(--background-primary);

  &:hover {
    background-color: var(--background-navigation);
    color: var(--text-navigation);
    box-shadow: 0px 2px 0px #fff;
  }
`;
