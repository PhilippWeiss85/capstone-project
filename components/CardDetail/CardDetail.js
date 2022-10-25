import styled from "styled-components";

export default function CardDetails({ updateCardDetail, id, showMoreDetails }) {
  function setValidation(set1, set2, set3) {
    if (set1 !== "" && set2 === "" && set3 === "") {
      return true;
    } else if (set1 !== "" && set2 !== "" && set3 === "") {
      return true;
    } else if (set1 !== "" && set2 !== "" && set3 !== "") {
      return true;
    } else if (set1 === "" && set2 === "" && set3 === "") {
      return true;
    } else {
      return false;
    }
  }

  function scoreValidation(playerOne, playerTwo) {
    if (playerOne === "" && playerTwo !== "") {
      return false;
    } else if (playerOne !== "" && playerTwo === "") {
      return false;
    } else if (playerOne !== "" && playerTwo === "") {
      return false;
    } else {
      return true;
    }
  }

  function handleDetailSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const firstSet = data.firstsetplayerone + data.firstsetplayertwo;
    const secondSet = data.secondsetplayerone + data.secondsetplayertwo;
    const thirdSet = data.thirdsetplayerone + data.thirdsetplayertwo;

    console.log(firstSet);

    if (setValidation(firstSet, secondSet, thirdSet)) {
      if (
        scoreValidation(data.firstsetplayerone, data.firstsetplayertwo) &&
        scoreValidation(data.secondsetplayerone, data.secondsetplayertwo) &&
        scoreValidation(data.thirdsetplayerone, data.thirdsetplayertwo)
      ) {
        updateCardDetail(
          id,
          data.result,
          { Player1: data.firstsetplayerone, Player2: data.firstsetplayertwo },
          {
            Player1: data.secondsetplayerone,
            Player2: data.secondsetplayertwo,
          },
          {
            Player1: data.thirdsetplayerone,
            Player2: data.thirdsetplayertwo,
          }
        );
        showMoreDetails();
      } else {
        alert("Please enter both set scores to continue");
      }
    } else {
      alert("Please fill in the previous sets first");
    }
  }

  return (
    <DetailsForm aria-label="Update your Gamecard" onSubmit={handleDetailSubmit}>
      <Headline>Add your GameResults</Headline>
      <FieldsetsGame>
        <ResultLegend aria-label="Add your result">Result</ResultLegend>
        <ResultLabelLeft htmlFor="result">won</ResultLabelLeft>
        <ResultsInput
          aria-labelledby="I won"
          type="radio"
          name="result"
          value="won"
          id="resultwon"
          required
        />
        <ResultsInput
          aria-labelledby="I lost"
          type="radio"
          name="result"
          value="lost"
          id="resultlost"
          required
        />
        <ResultLabelRight htmlFor="result">lost</ResultLabelRight>
      </FieldsetsGame>

      <Fieldsets>
        <SetLabel aria-label="Score of first set" htmlFor="firstset">
          Set 1
        </SetLabel>
        <SetInput
          type="number"
          min="0"
          max="20"
          name="firstsetplayerone"
          id="firstsetplayerone"
          aria-label="Score player one"
        />
        <SetInput
          type="number"
          min="0"
          max="20"
          name="firstsetplayertwo"
          id="firstsetplayertwo"
          aria-label="Score player two"
        />
      </Fieldsets>

      <Fieldsets>
        <SetLabel aria-label="Score of second set" htmlFor="secondset">
          Set 2
        </SetLabel>
        <SetInput
          type="number"
          min="0"
          max="20"
          name="secondsetplayerone"
          id="secondsetplayerone"
          aria-label="Score player one"
        />
        <SetInput
          type="number"
          min="0"
          max="20"
          name="secondsetplayertwo"
          id="secondsetplayertwo"
          aria-label="Score player two"
        />
      </Fieldsets>

      <Fieldsets>
        <SetLabel aria-label="Score of third set" htmlFor="thirdset">
          Set 3
        </SetLabel>
        <SetInput
          type="number"
          min="0"
          max="20"
          name="thirdsetplayerone"
          id="thirdsetplayerone"
          aria-label="Score player one"
        />
        <SetInput
          type="number"
          min="0"
          max="20"
          name="thirdsetplayertwo"
          id="thirdsetplayertwo"
          aria-label="Score player two"
        />
      </Fieldsets>

      <SaveButtonDiv>
        <SubmitButton aria-label="save details" type="submit">
          Save Results
        </SubmitButton>
      </SaveButtonDiv>
    </DetailsForm>
  );
}

const SubmitButton = styled.button`
  padding: 0.2em 0.5em;
  filter: drop-shadow(5px 4px 4px #000000);
  margin: 0 1em;
  background-color: var(--background-primary);
  color: var(--text-primary);
  font-size: 1.2em;
  border: none;

  &:hover {
    background-color: var(--background-secondary);
  }

  &:active {
    box-shadow: 3px 3px #000000;
  }
`;

const DetailsForm = styled.form`
  position: relative;
  display: grid;
  grid-template-areas:
    "headline headline headline"
    "results results results"
    "setone settwo setthree"
    "button button button";
  grid-template-rows: 0.5fr 1fr 1fr 0.5fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5em;
  padding: 1em 1em 0 1em;
`;

const FieldsetsGame = styled.fieldset`
  border: 2px solid black;
  grid-area: results;
  display: flex;
  align-items: center;
  padding: 0 30%;
`;

const Fieldsets = styled.fieldset`
  border: 2px solid black;
  grid-area: setone settwo setthree;
  display: flex;
  flex-direction: column;
`;

const ResultLegend = styled.legend`
  text-align: center;
`;

const SaveButtonDiv = styled.div`
  grid-area: button;
  margin: 1em auto;
`;

const Headline = styled.h3`
  grid-area: headline;
  text-align: center;
  padding-top: 0.5em;
  font-size: 1.2em;
`;

const ResultLabelLeft = styled.label`
  margin: 0 0 0 auto;
`;

const ResultLabelRight = styled.label`
  margin: 0 auto 0 0;
`;

const SetLabel = styled.label`
  margin: 0 auto;
`;

const ResultsInput = styled.input`
  margin: 0 5%;
`;

const SetInput = styled.input`
  width: 3em;
  margin: 0 auto;
  text-align: center;
`;
