import styled from "styled-components";
import Button from "../Button/Button";
import Link from "next/link";

export default function AddGameCardForm({ appendNewGameCard }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    console.log(data);
    appendNewGameCard(
      data.gametype,
      data.opponent,
      data.date,
      data.time,
      data.place,
      data.court
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit} aria-label="Create a new card">
      <StyledFieldSetRadioButtons>
        <StyledLegend aria-label="Select your game type">Match Type</StyledLegend>
        <StyledList>
          <StyledListItem>
            <label forhtml="match">Match</label>
            <StyledRadioInput
              required
              type="radio"
              name="gametype"
              id="match"
              value="Match"
              aria-labelledby="Game type: match"
            />
          </StyledListItem>
          <StyledListItem>
            <label forhtml="training">Training</label>
            <StyledRadioInput
              required
              type="radio"
              name="gametype"
              id="training"
              value="Training"
              aria-labelledby="Game type: training"
            />
          </StyledListItem>
        </StyledList>
      </StyledFieldSetRadioButtons>
      <label forhtml="opponent">Opponent`s Name</label>
      <input
        type="text"
        maxLength="30"
        required
        name="opponent"
        id="opponent"
        aria-labelledby="Add a name"
      />
      <label forhtml="opponent">Date</label>
      <input type="date" required name="date" id="date" aria-labelledby="Add a date" />
      <label forhtml="opponent">Time</label>
      <input type="time" required name="time" id="time" aria-labelledby="Add a time" />
      <label forhtml="place">Place</label>
      <select name="place" required id="place" aria-labelledby="Add a location">
        <option value="">... please select a location</option>
        <option value="Rothof">Rothof</option>
        <option value="Sportscheck">Sportscheck</option>
        <option value="Fidelopark">Fidelopark</option>
      </select>
      <StyledFieldSetRadioButtons>
        <StyledLegend aria-label="Choose your court">Choose your court</StyledLegend>
        <StyledList>
          <StyledListItem>
            <label forhtml="clay">Clay</label>
            <StyledRadioInput
              type="radio"
              name="court"
              id="clay"
              value="Clay"
              aria-labelledby="Court type: clay"
            />
          </StyledListItem>
          <StyledListItem>
            <label forhtml="carpet">Carpet</label>
            <StyledRadioInput
              required
              type="radio"
              name="court"
              id="carpet"
              value="Carpet"
              aria-labelledby="Court type: carpet"
            />
          </StyledListItem>
          <StyledListItem>
            <label forhtml="hardcourt">Hardcourt</label>
            <StyledRadioInput
              required
              type="radio"
              name="court"
              id="hardcourt"
              value="Hardcourt"
              aria-labelledby="Court type: hardcourt"
            />
          </StyledListItem>
          <StyledListItem>
            <label forhtml="gras">Gras</label>
            <StyledRadioInput
              required
              type="radio"
              name="court"
              id="gras"
              value="Gras"
              aria-labelledby="Court type: gras"
            />
          </StyledListItem>
        </StyledList>
      </StyledFieldSetRadioButtons>
      <StyledFieldSetButtons>
        <Link href="/gameplan" passHref>
          <a>
            <Button type="cancel">Cancel</Button>
          </a>
        </Link>
        <Button type="submit">Add GameCard</Button>
      </StyledFieldSetButtons>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 1em;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  padding: 2em 2em;
`;

const StyledFieldSetRadioButtons = styled.fieldset`
  border: none;
`;

const StyledFieldSetButtons = styled.fieldset`
  border: none;
  margin: 0 auto;
`;

const StyledLegend = styled.legend`
  padding-top: 1em;
`;

const StyledList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0.5em 0;
`;

const StyledListItem = styled.li`
  padding-right: 20px;
`;

const StyledRadioInput = styled.input`
  vertical-align: middle;
  margin-left: 1em;
`;
