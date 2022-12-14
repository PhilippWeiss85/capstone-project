import { useState } from "react";
import useStore from "../../store/useStore";
import Modal from "../Modals/Modal";
import { motion } from "framer-motion";
import styled from "styled-components";

export default function GameDetails({ id, showMoreDetails, results }) {
  const modal = useStore((state) => state.modal);
  const activateModal = useStore((state) => state.activateModal);
  const updateGameDetail = useStore((state) => state.updateGameDetail);
  const [errorHeadline, setErrorHeadline] = useState("");

  // useStates for controlled input
  const [finalResult, setFinalResult] = useState(results.gameresult);

  const [firstSetScorePlayerOne, setFirstSetScorePlayerOne] = useState(
    results.set[0].Player1
  );
  const [firstSetScorePlayerTwo, setFirstSetScorePlayerTwo] = useState(
    results.set[0].Player2
  );
  const [secondSetScorePlayerOne, setSecondSetScorePlayerOne] = useState(
    results.set[1].Player1
  );
  const [secondSetScorePlayerTwo, setSecondSetScorePlayerTwo] = useState(
    results.set[1].Player2
  );
  const [thirdSetScorePlayerOne, setThirdSetScorePlayerOne] = useState(
    results.set[2].Player1
  );
  const [thirdSetScorePlayerTwo, setThirdSetScorePlayerTwo] = useState(
    results.set[2].Player2
  );

  // validate that the user starts the input at set 1, no input in sets also allowed
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

  // validate that the user type fill out both input fields in one set
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

    if (setValidation(firstSet, secondSet, thirdSet)) {
      if (
        scoreValidation(data.firstsetplayerone, data.firstsetplayertwo) &&
        scoreValidation(data.secondsetplayerone, data.secondsetplayertwo) &&
        scoreValidation(data.thirdsetplayerone, data.thirdsetplayertwo)
      ) {
        updateGameDetail(
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
        setErrorHeadline("Please enter both set scores to continue");
        activateModal();
      }
    } else {
      setErrorHeadline("Please add the previous sets first");
      activateModal();
    }
  }

  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.3 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.4,
        delay: 0.2,
        ease: [0.1, 0.71, 0.4, 1],
      }}
    >
      <DetailsForm aria-label="Update your Gamecard" onSubmit={handleDetailSubmit}>
        {modal && <Modal headline={errorHeadline} />}
        <FieldsetsGame>
          <ResultLegend aria-label="Add your result">Add your results</ResultLegend>
          <ResultLabelLeft htmlFor="won">Won</ResultLabelLeft>
          <ResultsInput
            role="radioinput"
            aria-label="won"
            type="radio"
            name="result"
            value="won"
            checked={finalResult === "won"}
            onChange={(event) => setFinalResult(event.target.value)}
            id="won"
            required
          />
          <ResultsInput
            aria-label="lost"
            role="radioinput"
            type="radio"
            name="result"
            value="lost"
            checked={finalResult === "lost"}
            onChange={(event) => setFinalResult(event.target.value)}
            id="lost"
            required
          />
          <ResultLabelRight htmlFor="lost">Lost</ResultLabelRight>
        </FieldsetsGame>

        <Fieldsets>
          <SetLabel aria-label="Score of first set" htmlFor="firstset">
            Set 1
          </SetLabel>
          <SetInput
            role="numberinput"
            type="number"
            min="0"
            max="20"
            name="firstsetplayerone"
            id="firstsetplayerone"
            aria-label="Set 1: Score player one"
            value={firstSetScorePlayerOne}
            onChange={(event) => setFirstSetScorePlayerOne(event.target.value)}
          />
          <SetInput
            role="numberinput"
            type="number"
            min="0"
            max="20"
            name="firstsetplayertwo"
            id="firstsetplayertwo"
            aria-label="Set 1: Score player two"
            value={firstSetScorePlayerTwo}
            onChange={(event) => setFirstSetScorePlayerTwo(event.target.value)}
          />
        </Fieldsets>

        <Fieldsets>
          <SetLabel aria-label="Score of second set" htmlFor="secondset">
            Set 2
          </SetLabel>
          <SetInput
            role="numberinput"
            type="number"
            min="0"
            max="20"
            name="secondsetplayerone"
            id="secondsetplayerone"
            aria-label="Set 2: Score player one"
            value={secondSetScorePlayerOne}
            onChange={(event) => setSecondSetScorePlayerOne(event.target.value)}
          />
          <SetInput
            role="numberinput"
            type="number"
            min="0"
            max="20"
            name="secondsetplayertwo"
            id="secondsetplayertwo"
            aria-label="Set 2: Score player two"
            value={secondSetScorePlayerTwo}
            onChange={(event) => setSecondSetScorePlayerTwo(event.target.value)}
          />
        </Fieldsets>

        <Fieldsets>
          <SetLabel aria-label="Score of third set" htmlFor="thirdset">
            Set 3
          </SetLabel>
          <SetInput
            role="numberinput"
            type="number"
            min="0"
            max="20"
            name="thirdsetplayerone"
            id="thirdsetplayerone"
            aria-label="Set 3: Score player one"
            value={thirdSetScorePlayerOne}
            onChange={(event) => setThirdSetScorePlayerOne(event.target.value)}
          />
          <SetInput
            role="numberinput"
            type="number"
            min="0"
            max="20"
            name="thirdsetplayertwo"
            id="thirdsetplayertwo"
            aria-label="Set 3: Score player two"
            value={thirdSetScorePlayerTwo}
            onChange={(event) => setThirdSetScorePlayerTwo(event.target.value)}
          />
        </Fieldsets>

        <SaveButtonDiv>
          <SubmitButton aria-label="save details" type="submit" role="submitbutton">
            Save
          </SubmitButton>
        </SaveButtonDiv>
      </DetailsForm>
    </motion.nav>
  );
}

const SubmitButton = styled.button`
  padding: 0.2em 0.5em;
  filter: drop-shadow(2px 3px 2px #000000);
  margin: 0.1em 1em;
  background-color: var(--background-primary);
  color: var(--text-primary);
  font-size: 1em;
  border: none;

  &:hover {
    background-color: var(--background-secondary);
  }
`;

const DetailsForm = styled.form`
  position: relative;
  display: grid;
  grid-template-areas:
    "results results results"
    "setone settwo setthree"
    "button button button";
  padding-bottom: 0.3em;
  grid-template-rows: 5em 6em 2em;
  grid-template-columns: 1fr 1fr 1fr;
  background: var(--background-primary);
`;

const FieldsetsGame = styled.fieldset`
  grid-area: results;
  display: flex;
  align-items: center;
  border: none;
`;

const Fieldsets = styled.fieldset`
  grid-area: setone settwo setthree;
  display: flex;
  border: none;
  flex-direction: column;
  margin: 0.5em;
  padding: 0.5em;
  color: var(--text-secondary);
  background: var(--background-navigation);
`;

const ResultLegend = styled.legend`
  width: 100%;
  border-radius: 0;
  color: var(--text-secondary);
  text-align: center;
  border-bottom: 1px solid var(--text-primary);
  padding: 0.7em 1em;
  background: var(--background-navigation);
`;

const SaveButtonDiv = styled.div`
  grid-area: button;
  margin: 0 auto;
`;

const ResultLabelLeft = styled.label`
  margin: 0 0 0 auto;
  padding: 1em 0;
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
