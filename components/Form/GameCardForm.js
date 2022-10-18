import styled from "styled-components";
import AddButton from "../Button/Button";

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
    <StyledForm onSubmit={handleSubmit} aria-label="Create new card">
      <StyledFieldSetRadioButtons>
        <StyledLegend aria-label="Select your game type">Match Type</StyledLegend>
        <StyledList>
          <StyledListItem>
            <label forhtml="match">Match</label>
            <StyledRadioInput
              required="required"
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
              required="required"
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
        required="required"
        name="opponent"
        id="opponent"
        aria-labelledby="Add a name"
      />
      <label forhtml="opponent">Date</label>
      <input
        type="date"
        required="required"
        name="date"
        id="date"
        aria-labelledby="Add a date"
      />
      <label forhtml="opponent">Time</label>
      <input
        type="time"
        required="required"
        name="time"
        id="time"
        aria-labelledby="Add a time"
      />
      <label forhtml="place">Place</label>
      <select
        name="place"
        required="required"
        id="place"
        aria-labelledby="Add a location"
      >
        <option value="">... please select a location</option>
        <option value="Rothof">Rothof</option>
        <option value="Sportscheck">Sportscheck</option>
        <option value="Fidelopark">Fidelopark</option>
      </select>
      <StyledFieldSetRadioButtons>
        <StyledLegend aria-label="Choose your court">Choose your court</StyledLegend>
        <StyledList>
          <StyledListItem>
            <label forhtml="sand">Sand</label>
            <StyledRadioInput
              type="radio"
              name="court"
              id="sand"
              value="Sand"
              aria-labelledby="Court type: sand"
            />
          </StyledListItem>
          <StyledListItem>
            <label forhtml="carpet">Carpet</label>
            <StyledRadioInput
              required="required"
              type="radio"
              name="court"
              id="carpet"
              value="Carpet"
              aria-labelledby="Court type: carpet"
            />
          </StyledListItem>
          <StyledListItem>
            <label forhtml="concrete">Concrete</label>
            <StyledRadioInput
              required="required"
              type="radio"
              name="court"
              id="concrete"
              value="Concrete"
              aria-labelledby="Court type: concrete"
            />
          </StyledListItem>
        </StyledList>
      </StyledFieldSetRadioButtons>
      <AddButton type="submit">Add GameCard</AddButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
  padding: 2rem 2rem;
`;

const StyledFieldSetRadioButtons = styled.fieldset`
  border: none;
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
