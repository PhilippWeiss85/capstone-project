import { useRouter } from "next/router";
import useStore from "../../store/useStore";
import Modal from "../Modals/Modal";
import { useState } from "react";
import { PuffLoader } from "react-spinners";
import { LoadingContainer } from "../LoadingContainer";
import { motion } from "framer-motion";
import { FiUpload, FiCheck } from "react-icons/fi";

import styled from "styled-components";

export default function AddGameForm() {
  const appendNewGame = useStore((state) => state.appendNewGame);
  const activateModal = useStore((state) => state.activateModal);
  const modal = useStore((state) => state.modal);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUpload, setImageUpload] = useState(false);
  // const [imageName, setImageName] = useState("");

  const router = useRouter();

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    try {
      setLoading(true);
      const response = await fetch("/api/imageUpload", {
        method: "POST",
        body: formData,
      });
      const img = await response.json();
      setLoading(false);
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
          img.url
        );
      }
    } catch (error) {
      setError(error);
    }

    router.push("/gamelist");
  }

  function handleChange(event) {
    setImageUpload(true);
  }

  return (
    <>
      {loading === true ? (
        <LoadingContainer>
          <PuffLoader color="#BBF244" loading size={300} speedMultiplier={1.5} />
        </LoadingContainer>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: -100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.2,
            ease: [0.1, 0.71, 0.4, 1],
          }}
        >
          <FormContainer onSubmit={handleSubmit} aria-label="Create a new card">
            <FormFieldSetRadio>
              {modal && <Modal headline="Please enter a valid name" />}
              <FormLegend aria-label="Select your game type">Game Type</FormLegend>
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
              <OpponentWrapper>
                <OpponentContainer>
                  <FormLabel htmlFor="opponent">Opponent</FormLabel>
                  <OpponentInputContainer
                    role="input"
                    type="text"
                    required
                    name="opponent"
                    id="opponent"
                    aria-label="name"
                    autocomplete="off"
                  />
                </OpponentContainer>

                <ImageLabel htmlFor="file">
                  {imageUpload === false ? (
                    <>
                      <FiUpload />
                      <ImageLabelText>Upload Image</ImageLabelText>
                    </>
                  ) : (
                    <>
                      <ImageCheck />
                      <ImageLabelText>Image saved</ImageLabelText>
                    </>
                  )}

                  <InputImageContainer
                    accept=".jpg, .jpeg, .png"
                    type="file"
                    name="file"
                    required
                    id="file"
                    aria-label="upload image"
                    onChange={handleChange}
                  />
                </ImageLabel>
              </OpponentWrapper>
              <FormLabel htmlFor="date">Date</FormLabel>
              <InputContainer
                role="input"
                type="date"
                required
                name="date"
                id="date"
                min="2022-01-01"
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
                <option value="Hirschau">Hirschau</option>
                <option value="Olympiapark">Olympiapark</option>
                <option value="Cosima">Cosima</option>
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
              <SubmitButton
                aria-label="create new card"
                type="submit"
                role="submitbutton"
              >
                Add Game
              </SubmitButton>
            </ButtonFieldSet>
          </FormContainer>
        </motion.div>
      )}
    </>
  );
}

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0.2em;
  max-width: 640px;
  margin: 0.5em auto;
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
  font-size: 0.9em;
`;

const FormLegend = styled.legend`
  padding: 16px 0 0;
  font-size: 1em;
`;
const FormLabel = styled.label`
  font-size: 16px;
  margin: 1em 0 0 0;
  vertical-align: top;
  padding: 0 0.2em;
  cursor: pointer;
`;

const FormLabelRadio = styled.label`
  font-size: 0.9em;
`;

const InputContainer = styled.input`
  border: none;
  margin: 0;
  height: 3em;
  padding-left: 1em;
  font-size: 0.9em;
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

const OpponentWrapper = styled.section`
  display: flex;
  align-items: flex-end;
  gap: 1em;
  margin-top: 1em;
`;

const OpponentContainer = styled.div`
  width: 70%;
`;

const OpponentInputContainer = styled.input`
  border: none;
  margin: 0;
  height: 3em;
  padding-left: 1em;
  font-size: 1em;
  color: var(--text-primary);
  background: var(--background-forminput);
  width: 100%;
`;

const ImageLabel = styled.label`
  padding-top: 0.2em;
  cursor: pointer;
  height: 3em;
  color: var(--text-primary);
  background: var(--background-forminput);
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2em;
`;

const ImageLabelText = styled.p`
  padding: 0;
  margin: 0;
  font-size: 0.8em;
`;

const InputImageContainer = styled.input`
  height: 1px;
  width: 1px;
  // for accessibility reasons
`;

const ImageCheck = styled(FiCheck)`
  color: #bbf244;
`;

const InputDropdown = styled.select`
  border: none;
  margin: 0;
  height: 3em;
  padding-left: 1em;
  font-size: 1em;
  background: var(--background-forminput);
  color: var(--text-primary);
`;

const FormList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 0.3em 0;
  margin: 0;
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

const SubmitButton = styled.button`
  padding: 0.2em 0.5em;
  filter: drop-shadow(5px 4px 4px #000000);
  margin: 0.5em 1em;
  background-color: var(--background-primary);
  color: var(--text-primary);
  font-size: 1.1em;
  border: none;

  &:hover {
    background-color: var(--background-secondary);
  }
`;
