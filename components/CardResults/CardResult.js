import styled from "styled-components";

export default function CardResult({ results }) {
  console.log(results);
  console.log(results.gameresult);
  console.log(results.set[0].Player1);
  console.log(results.set[0].Player2);
  console.log(results.set[1].Player1);
  console.log(results.set[1].Player2);
  console.log(results.set[2].Player1);
  console.log(results.set[2].Player2);

  return (
    <ResultContainer>
      <Result>{results.gameresult}</Result>
      <SetContainer>
        <SetOne>{results.set[0].Player1}</SetOne>
        <p>:</p>
        <SetOne>{results.set[0].Player2}</SetOne>
      </SetContainer>
      <SetContainer>
        <SetTwo>{results.set[1].Player1}</SetTwo>
        <p>:</p>
        <SetTwo>{results.set[1].Player2}</SetTwo>
      </SetContainer>
      <SetContainer>
        <SetThree>{results.set[2].Player1}</SetThree>
        <p>:</p>
        <SetThree>{results.set[2].Player2}</SetThree>
      </SetContainer>
      <VictoryCircle />
    </ResultContainer>
  );
}

const ResultContainer = styled.article`
  display: grid;
  gap: 1.5em;
  grid-template-areas: "result setone settwo setthree victorycircle";
  padding-left: 2em;
`;

const Result = styled.p`
  text-align: center;
  grid-area: result;
  margin: auto 0;
`;

const SetContainer = styled.div`
  background-color: var(--background-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3em;
`;

const SetOne = styled.p`
  grid-area: setone;
  background-color: #ffffff;
  width: 1.5em;
  height: 1.5em;
  text-align: center;
`;

const SetTwo = styled.p`
  grid-area: settwo;
  background-color: #ffffff;
  width: 1.5em;
  height: 1.5em;
  text-align: center;
`;

const SetThree = styled.p`
  grid-area: setthree;
  background-color: #ffffff;
  width: 1.5em;
  height: 1.5em;
  text-align: center;
`;

const VictoryCircle = styled.div`
  grid-area: victorycircle;
  border-radius: 50%;
  width: 2em;
  height: 2em;
  margin: auto 0;
  background-color: green;
`;
