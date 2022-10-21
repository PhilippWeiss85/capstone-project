import styled from "styled-components";
import Button from "../Button";

export default function CardDetails() {
  function handleDetailSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <DetailsForm onSubmit={handleDetailSubmit}>
      <Headline>Add your GameResults</Headline>
      <FieldsetsGame>
        <ResultLegend>Result</ResultLegend>
        <ResultLabelLeft htmlFor="result">won</ResultLabelLeft>
        <ResultsInput type="radio" name="result" value="won" id="resultwon" />
        <ResultsInput type="radio" name="result" value="lost" id="resultlost" />
        <ResultLabelRight htmlFor="result">lost</ResultLabelRight>
      </FieldsetsGame>

      <Fieldsets>
        <SetLabel htmlFor="firstset">Set 1</SetLabel>
        <SetInput
          type="number"
          min="0"
          max="20"
          placeholder="0"
          name="firstsetplayerone"
          id="firstsetplayerone"
          // preventing direct input in formfield solution form https://stackoverflow.com/questions/29715655/html-5-input-type-date-disable-keyboard-input
          onKeyDown={(e) => e.preventDefault()}
        />
        <SetInput
          type="number"
          min="0"
          max="20"
          placeholder="0"
          name="firstsetplayertwo"
          id="firstsetplayertwo"
          onKeyDown={(e) => e.preventDefault()}
        />
      </Fieldsets>

      <Fieldsets>
        <SetLabel htmlFor="secondset">Set 2</SetLabel>
        <SetInput
          type="number"
          min="0"
          max="20"
          placeholder="0"
          name="secondsetplayerone"
          id="secondsetplayerone"
          onKeyDown={(e) => e.preventDefault()}
        />
        <SetInput
          type="number"
          min="0"
          max="20"
          placeholder="0"
          name="secondsetplayertwo"
          id="secondsetplayertwo"
          onKeyDown={(e) => e.preventDefault()}
        />
      </Fieldsets>

      <Fieldsets>
        <SetLabel htmlFor="thirdset">Set 3</SetLabel>
        <SetInput
          type="number"
          min="0"
          max="20"
          placeholder="0"
          name="thirdsetplayerone"
          id="thirdsetplayerone"
          onKeyDown={(e) => e.preventDefault()}
        />
        <SetInput
          type="number"
          min="0"
          max="20"
          placeholder="0"
          name="thirdsetplayertwo"
          id="thirdsetplayertwo"
          onKeyDown={(e) => e.preventDefault()}
        />
      </Fieldsets>

      <SaveButtonDiv>
        <Button type="submit">Save Results</Button>
      </SaveButtonDiv>
    </DetailsForm>
  );
}

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
  margin: 0 1.5em;
`;

const SetInput = styled.input`
  width: 3em;
  margin: 0 auto;
  text-align: center;
`;
