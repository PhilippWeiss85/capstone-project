import styled from "styled-components";
import Button from "../Button";
import { useRouter } from "next/router";

export default function AddGameCardForm({ appendNewGameCard }) {
  const router = useRouter();

  function handleSubmit(event) {
    event.preventDefault();

    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    appendNewGameCard(
      data.gametype,
      data.opponent,
      data.date,
      data.time,
      data.place,
      data.court
    );
    event.target.reset();
  }

  return (
    <FormContainer onSubmit={handleSubmit} aria-label="Create a new card">
      <FormFieldSetRadio>
        <FormLegend aria-label="Select your game type">Match Type</FormLegend>
        <FormList>
          <FormRadioItem>
            <FormLabelRadio forHtml="match">Match</FormLabelRadio>
            <RadioInput
              required
              type="radio"
              name="gametype"
              id="match"
              value="Match"
              aria-labelledby="Game type: match"
            />
          </FormRadioItem>
          <FormRadioItem>
            <FormLabelRadio forHtml="training">Training</FormLabelRadio>
            <RadioInput
              required
              type="radio"
              name="gametype"
              id="training"
              value="Training"
              aria-labelledby="Game type: training"
            />
          </FormRadioItem>
        </FormList>
      </FormFieldSetRadio>
      <FormFieldSetInput>
        <FormLabel forHtml="opponent">Opponent`s Name</FormLabel>
        <InputContainer
          type="text"
          maxLength="30"
          required
          name="opponent"
          id="opponent"
          aria-labelledby="Add a name"
        />
        <FormLabel forHtml="opponent">Date</FormLabel>
        <InputContainer
          type="date"
          required
          name="date"
          id="date"
          min="2022-10-20"
          max="2099-12-31"
          aria-labelledby="Add a date"
        />
        <FormLabel forHtml="opponent">Time</FormLabel>
        <InputContainer
          type="time"
          required
          name="time"
          id="time"
          aria-labelledby="Add a time"
        />
        <FormLabel forHtml="place">Place</FormLabel>
        <InputDropdown name="place" required id="place" aria-labelledby="Add a location">
          <option value="">... please select a location</option>
          <option value="Rothof">Rothof</option>
          <option value="Sportscheck">Sportscheck</option>
          <option value="Fidelopark">Fidelopark</option>
        </InputDropdown>
      </FormFieldSetInput>
      <FormFieldSetRadio>
        <FormLegend aria-label="Choose your court">Choose your court</FormLegend>
        <FormList>
          <FormRadioItem>
            <FormLabelRadio forHtml="clay">Clay</FormLabelRadio>
            <RadioInput
              type="radio"
              name="court"
              id="clay"
              value="Clay"
              aria-labelledby="Court type: clay"
            />
          </FormRadioItem>
          <FormRadioItem>
            <FormLabelRadio forHtml="carpet">Carpet</FormLabelRadio>
            <RadioInput
              required
              type="radio"
              name="court"
              id="carpet"
              value="Carpet"
              aria-labelledby="Court type: carpet"
            />
          </FormRadioItem>
          <FormRadioItem>
            <FormLabelRadio forHtml="hard">Hard</FormLabelRadio>
            <RadioInput
              required
              type="radio"
              name="court"
              id="hard"
              value="Hard"
              aria-labelledby="Court type: hard"
            />
          </FormRadioItem>
          <FormRadioItem>
            <FormLabelRadio forHtml="gras">Gras</FormLabelRadio>
            <RadioInput
              required
              type="radio"
              name="court"
              id="gras"
              value="Gras"
              aria-labelledby="Court type: gras"
            />
          </FormRadioItem>
        </FormList>
      </FormFieldSetRadio>
      <ButtonFieldSet>
        <Button type="submit">Add GameCard</Button>
      </ButtonFieldSet>
    </FormContainer>
  );
}

const FormContainer = styled.form`
  margin: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: 4px solid var(--box-shadow);
  padding: 1em 2em 1em 2em;
`;

const FormFieldSetRadio = styled.fieldset`
  border: none;
  width: 80%;
  margin: 0 auto;
`;

const FormFieldSetInput = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const FormLegend = styled.legend`
  font-size: 1.2em;
`;
const FormLabel = styled.label`
  font-size: 1.2em;
`;
const FormLabelRadio = styled.label`
  font-size: 1em;
`;

const InputContainer = styled.input`
  border: none;
  margin: 1em 0;
  height: 3em;
  padding-left: 1em;
  font-size: 1em;
  color: var(--box-shadow);

  &::-webkit-datetime-edit-text {
    color: black;
    padding: 0 0.3em;
  }

  &::-webkit-inner-spin-button {
    display: none;
  }
  &::-webkit-calendar-picker-indicator {
    margin-right: 1em;
    height: 1.5em;
    width: 1.5em;
  }
`;

const InputDropdown = styled.select`
  border: none;
  margin: 1em 0;
  height: 3em;
  padding-left: 1em;
  font-size: 1em;
  color: var(--box-shadow);
`;

const FormList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  background: white;
  padding: 0.3em 0;
  margin: 1em 0;
`;

const FormRadioItem = styled.li`
  padding-left: 0.5em;
  display: flex;
  flex-direction: column;
  color: hsla(241, 91%, 13%, 0.7);
`;

const RadioInput = styled.input`
  margin-left: 1em;
  margin-top: 0.7em;
  color: var(--box-shadow);
`;

const ButtonFieldSet = styled.fieldset`
  border: none;
  margin: 1em auto;
`;
