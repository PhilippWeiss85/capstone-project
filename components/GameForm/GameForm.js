import { useRouter } from "next/router";
import useStore from "../../store/useStore";
import Modal from "../Modals/Modal";
import { useState } from "react";

import styled from "styled-components";

export default function AddGameForm() {
  const appendNewGame = useStore((state) => state.appendNewGame);
  const activateModal = useStore((state) => state.activateModal);
  const modal = useStore((state) => state.modal);
  const [error, setError] = useState(null);
  const [image, setImage] = useState("");

  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/imageUpload", {
        method: "post",
        body: formData,
      });
      const img = await response.json();

      // to prevent name emty name inputs
      if (data.opponent.trim() === "") {
        activateModal();
      } else {
        appendNewGame(
          data.gametype,
          data.opponent,
          data.date,
          data.time,
          data.place,
          data.court,
          img.url,
          img.width,
          img.height
        );
      }
    } catch (error) {
      setError(error);
    }

    router.push("/gamelist");
    console.log("data", data);
  }

  return (
    <FormContainer onSubmit={handleSubmit} aria-label="Create a new card">
      <FormFieldSetRadio>
        {modal && <Modal headline="Please enter a valid name" />}
        <FormLegend aria-label="Select your game type">Match Type</FormLegend>
        <FormList>
          <FormRadioItem>
            <FormLabelRadio htmlFor="match">Match</FormLabelRadio>
            <RadioInput
              role="radioinput"
              required
              type="radio"
              name="gametype"
              id="match"
              value="Match"
              aria-label="match"
            />
          </FormRadioItem>
          <FormRadioItem>
            <FormLabelRadio htmlFor="training">Training</FormLabelRadio>
            <RadioInput
              role="radioinput"
              required
              type="radio"
              name="gametype"
              id="training"
              value="Training"
              aria-label="training"
            />
          </FormRadioItem>
        </FormList>
      </FormFieldSetRadio>
      <FormFieldSetInput>
        <FormLabel htmlFor="opponent">Opponent</FormLabel>
        <InputContainer
          role="input"
          type="text"
          required
          name="opponent"
          id="opponent"
          aria-label="name"
        />
        <FormLabel htmlFor="image">Give em a face</FormLabel>
        <InputImageContainer
          accept=".jpg, .jpeg, .png"
          type="file"
          name="file"
          required
          id="file"
          aria-label="image"
        />
        <FormLabel htmlFor="date">Date</FormLabel>
        <InputContainer
          role="input"
          type="date"
          required
          name="date"
          id="date"
          min="2022-10-01"
          max="2099-12-31"
          aria-label="date"
        />
        <FormLabel htmlFor="time">Time</FormLabel>
        <InputContainer
          role="input"
          type="time"
          required
          name="time"
          id="time"
          aria-label="time"
        />
        <FormLabel htmlFor="place">Place</FormLabel>
        <InputDropdown
          name="place"
          required
          id="place"
          aria-label="location"
          role="input"
        >
          <option value="">... please select a location</option>
          <option value="Rothof">Rothof</option>
          <option value="Sportscheck">Sportscheck</option>
          <option value="Fideliopark">Fideliopark</option>
        </InputDropdown>
      </FormFieldSetInput>
      <FormFieldSetRadio>
        <FormLegend aria-label="Choose your court">Choose your court</FormLegend>
        <FormList>
          <FormRadioItem>
            <FormLabelRadio htmlFor="clay">Clay</FormLabelRadio>
            <RadioInput
              role="radioinput"
              type="radio"
              name="court"
              id="clay"
              value="Clay"
              aria-label="clay"
            />
          </FormRadioItem>
          <FormRadioItem>
            <FormLabelRadio htmlFor="carpet">Carpet</FormLabelRadio>
            <RadioInput
              role="radioinput"
              required
              type="radio"
              name="court"
              id="carpet"
              value="Carpet"
              aria-label="Court type: carpet"
            />
          </FormRadioItem>
          <FormRadioItem>
            <FormLabelRadio htmlFor="hard">Hard</FormLabelRadio>
            <RadioInput
              role="radioinput"
              required
              type="radio"
              name="court"
              id="hard"
              value="Hard"
              aria-label="hard"
            />
          </FormRadioItem>
          <FormRadioItem>
            <FormLabelRadio htmlFor="gras">Gras</FormLabelRadio>
            <RadioInput
              role="radioinput"
              required
              type="radio"
              name="court"
              id="gras"
              value="Gras"
              aria-labelledby="gras"
            />
          </FormRadioItem>
        </FormList>
      </FormFieldSetRadio>
      <ButtonFieldSet>
        <SubmitButton aria-label="create new card" type="submit" role="submitbutton">
          Add Game
        </SubmitButton>
      </ButtonFieldSet>
    </FormContainer>
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
    box-shadow: 3px 3px var(--attention-color-primary);
    background-color: var(--background-primary);
  }
`;

const FormContainer = styled.form`
  margin: 0.2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0.2em;
  max-width: 640px;
  margin: 0 auto;
`;

const FormFieldSetRadio = styled.fieldset`
  border: none;
  display: flex;
  justify-content: center;
  width: 95%;
  margin: 0 auto;
`;

const FormFieldSetInput = styled.fieldset`
  border: none;
  display: flex;
  flex-direction: column;
  width: 95%;
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
  margin: 0 0;
  height: 3em;
  padding-left: 1em;
  font-size: 1em;
  color: var(--text-primary);
  background: var(--background-forminput);

  &::-webkit-datetime-edit-text {
    color: var(--background-primary);
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

const InputImageContainer = styled.input`
  border: none;
  margin: 1em 0;
  height: 3em;
  padding-left: 1em;
  font-size: 1em;
  color: var(--background-primary);
  background: var(--background-forminput);

  &.file-upload-button {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
  }
`;

const InputDropdown = styled.select`
  border: none;
  margin: 1em 0;
  height: 3em;
  padding-left: 1em;
  font-size: 1em;
  background: var(--background-forminput);
`;

const FormList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  width: 100%;
  padding: 0.3em 0;
  margin: 1em 0;
  background: var(--background-forminput);
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
