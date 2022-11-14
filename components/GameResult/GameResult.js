import styled from "styled-components";
import { FaTrophy } from "react-icons/fa";
import { MdOutlineDoNotDisturbOn } from "react-icons/md";

export default function GameResult({ results }) {
  // used for display logic of set containers
  const emptySets = results.set.filter((set) => {
    return set.Player1 === "" && set.Player2 === "";
  });

  return (
    <ResultContainer>
      <Result gameresult={results.gameresult}>
        {results.gameresult.toUpperCase()}{" "}
        {results.gameresult === "won" ? <FaTrophy /> : <MdOutlineDoNotDisturbOn />}
      </Result>
      {emptySets.length < 3 && (
        <AllSets>
          {results.set[0].Player1 === "" ||
            (results.set[0].Player2 === "" ? (
              ""
            ) : (
              <SetContainer>
                <SetOne>{results.set[0].Player1}</SetOne>
                <p>:</p>
                <SetOne>{results.set[0].Player2}</SetOne>
              </SetContainer>
            ))}
          {results.set[1].Player1 === "" || results.set[1].Player2 === "" ? (
            ""
          ) : (
            <SetContainer>
              <SetTwo>{results.set[1].Player1}</SetTwo>
              <p>:</p>
              <SetTwo>{results.set[1].Player2}</SetTwo>
            </SetContainer>
          )}
          {results.set[2].Player1 === "" || results.set[2].Player2 === "" ? (
            ""
          ) : (
            <SetContainer>
              <SetThree>{results.set[2].Player1}</SetThree>
              <p>:</p>
              <SetThree>{results.set[2].Player2}</SetThree>
            </SetContainer>
          )}
        </AllSets>
      )}
    </ResultContainer>
  );
}

const ResultContainer = styled.article`
  width: 130px;
`;

const Result = styled.p`
  border-radius: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.2em 0;
  padding: 0.2em;
  gap: 1em;
  color: var(--text-primary);
  height: 1.5em;
  box-shadow: 0 2px 0
    ${({ gameresult }) =>
      gameresult === "won"
        ? "hsla(141, 50%, 50%, 1)"
        : gameresult === "lost"
        ? "	hsla(8, 95%, 51%, 1)"
        : ""};
`;

const AllSets = styled.article`
  width: 100%;
  display: grid;
  grid-template-areas: "set1 set2 set3";
  grid-template-rows: 1.5em;
  grid-template-columns: 1fr 1fr 1fr;
`;

const SetContainer = styled.aside`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f7f5;
  border-radius: 0;
  margin: 0.15em 0.15em;
  gap: 0.1em;
`;

const SetOne = styled.p`
  grid-area: set1;
`;

const SetTwo = styled.p`
  grid-area: set2;
`;

const SetThree = styled.p`
  grid-area: set3;
`;
