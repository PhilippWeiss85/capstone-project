import styled from "styled-components";

export default function CardDetails() {
  function handleDetailSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  return (
    <DetailsForm onSubmit={handleDetailSubmit}>
      <Headline>Das ist eine H3</Headline>
      <Fieldsets>
        <ResultLabel forHtml="result">Result:</ResultLabel>
        <ResultsInput type="option" name="result" id="result" />
      </Fieldsets>
      <Fieldsets>
        <FirstSetLabel forHtml="firstset">Set 1</FirstSetLabel>

        <SetInput type="number" name="firstsetplayerone" id="firstset" />
        <p>:</p>
        <SetInput type="number" name="firstsetplayertwo" id="firstset" />
      </Fieldsets>
      <Fieldsets>
        <SecondSetLabel forHtml="secondset">Set 2</SecondSetLabel>

        <SetInput type="number" name="secondsetplayerone" id="secondset" />
        <SetInput type="number" name="secondsetplayertwo" id="secondset" />
      </Fieldsets>
      <Fieldsets>
        <ThirdSetLabel forHtml="thirdset">Set 3</ThirdSetLabel>

        <SetInput type="number" name="thirdsetplayerone" id="thirdset" />
        <SetInput type="number" name="thirdsetplayertwo" id="thirdset" />
      </Fieldsets>
      <TestButton type="submit">save</TestButton>
    </DetailsForm>
  );
}

const DetailsForm = styled.form`
  position: relative;
  display: grid;
  grid-template-areas:
    "headline headline headline headline"
    "results setone settwo setthree"
    "results setone settwo setthree"
    "save save save save";
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 0.3em;
  padding-top: 1em;
  border: 1px solid black;
`;

const Fieldsets = styled.fieldset`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TestButton = styled.button`
  grid-area: save;
`;

const Headline = styled.h3`
  grid-area: headline;
  text-align: center;
  padding-bottom: 1em;
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
  width: 5em;
  margin: 0 auto;
`;
