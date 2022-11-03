import styled from "styled-components";

export default function GameResult({ results }) {
  // used for display logic of set containers
  const emptySets = results.set.filter((set) => {
    return set.Player1 === "" && set.Player2 === "";
  });

  return (
    <ResultContainer>
      <Result gameresult={results.gameresult}>{results.gameresult}</Result>
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

const ResultContainer = styled.section`
  display: grid;
  grid-auto-flow: column;
  grid-template-areas: "result setone settwo setthree";
`;

const Result = styled.p`
  grid-area: result;
  display: flex;
  justify-content: center;
  padding: 0 1em;
  height: 1.5em;
  align-items: center;
  color: #000000;

  background: ${({ gameresult }) =>
    gameresult === "won" ? "#2ea357" : gameresult === "lost" ? "#d74123" : ""};
`;

const AllSets = styled.article`
  gap: 0.5em;
  width: 100%;
  margin-left: 1em;
  color: #000000;
`;

const SetContainer = styled.aside`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.2em;
`;

const SetOne = styled.p`
  grid-area: setone;
  background-color: #ffffff;
  width: 1.2em;
  height: 1.2em;
  text-align: center;
`;

const SetTwo = styled.p`
  grid-area: settwo;
  background-color: #ffffff;
  width: 1.2em;
  height: 1.2em;
  text-align: center;
`;

const SetThree = styled.p`
  grid-area: setthree;
  background-color: #ffffff;
  width: 1.2em;
  height: 1.2em;
  text-align: center;
`;
