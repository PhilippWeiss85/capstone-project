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
      <Fieldsets>
        <ResultLegend>Result</ResultLegend>
        <ResultLabel forHtml="result">won</ResultLabel>
        <ResultsInput type="radio" name="result" value="won" id="result" />
        <ResultLabel forHtml="result">lost</ResultLabel>
        <ResultsInput type="radio" name="result" value="lost" id="result" />
      </Fieldsets>

      <Fieldsets>
        <FirstSetLabel forHtml="firstset">Set 1</FirstSetLabel>
        <SetInput
          type="number"
          min="0"
          max="10"
          placeholder="0"
          name="firstsetplayerone"
          id="firstset"
        />
        <SetInput
          type="number"
          min="0"
          max="10"
          placeholder="0"
          name="firstsetplayertwo"
          id="firstset"
        />
      </Fieldsets>

      <Fieldsets>
        <SecondSetLabel forHtml="secondset">Set 2</SecondSetLabel>
        <SetInput
          type="number"
          min="0"
          max="10"
          placeholder="0"
          name="secondsetplayerone"
          id="secondset"
        />
        <SetInput
          type="number"
          min="0"
          max="10"
          placeholder="0"
          name="secondsetplayertwo"
          id="secondset"
        />
      </Fieldsets>

      <Fieldsets>
        <ThirdSetLabel forHtml="thirdset">Set 3</ThirdSetLabel>
        <SetInput
          type="number"
          min="0"
          max="10"
          placeholder="0"
          name="thirdsetplayerone"
          id="thirdset"
        />
        <SetInput
          type="number"
          min="0"
          max="10"
          placeholder="0"
          name="thirdsetplayertwo"
          id="thirdset"
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
    "headline headline headline headline"
    "results setone settwo setthree"
    "save save save save";
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0.5em;
  padding: 1em 1em 0 1em;
`;

const Fieldsets = styled.fieldset`
  display: flex;
  flex-direction: column;
  border: none;
`;

const ResultLegend = styled.legend`
  text-align: center;
`;

const SaveButtonDiv = styled.div`
  grid-area: save;
  margin: 1em auto;
`;

const Headline = styled.h3`
  grid-area: headline;
  text-align: center;
  padding-top: 0.5em;
  font-size: 1.2em;
`;

const ResultLabel = styled.label`
  grid-area: results;
  margin: 0 auto;
`;

const FirstSetLabel = styled.label`
  grid-area: setone;
  margin: 0 auto;
`;

const SecondSetLabel = styled.p`
  grid-area: settwo;
  margin: 0 auto;
`;

const ThirdSetLabel = styled.p`
  grid-area: setthree;
  margin: 0 auto;
`;

const ResultsInput = styled.input`
  width: 5em;
  margin: 0 auto;
`;

const SetInput = styled.input`
  width: 3em;
  margin: 0 auto;
  text-align: center;
`;
