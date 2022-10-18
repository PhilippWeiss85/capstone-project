import styled from "styled-components";
import AddButton from "../Button/Button";

export default function AddGameCardForm({ appendNewGameCard }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    console.log(data);
    appendNewGameCard(
      data.matchtype,
      data.opponent,
      data.date,
      data.time,
      data.place,
      data.court
    );
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFieldSetRadioButtons>
        <StyledLegend>Match Type</StyledLegend>
        <StyledList>
          <StyledListItem>
            <label forhtml="match">Match</label>
            <StyledRadioInput type="radio" name="matchtype" id="match" value="match" />
          </StyledListItem>
          <StyledListItem>
            <label forhtml="training">Training</label>
            <StyledRadioInput
              type="radio"
              name="matchtype"
              id="training"
              value="training"
            />
          </StyledListItem>
        </StyledList>
      </StyledFieldSetRadioButtons>
      <label forhtml="opponent" placeholder="Please insert your opponents name">
        Opponent`s Name
      </label>
      <input type="text" name="opponent" id="opponent" />
      <label forhtml="opponent">Date</label>
      <input type="date" name="date" id="date" />
      <label forhtml="opponent">Time</label>
      <input type="time" name="time" id="time" />
      <label forhtml="place">Place</label>
      <select name="place" id="place">
        <option value="Rothof">Rothof</option>
        <option value="Sportscheck">Sportscheck</option>
        <option value="Fidelopark">Fidelopark</option>
      </select>
      <StyledFieldSetRadioButtons>
        <StyledLegend>Choose your court</StyledLegend>
        <StyledList>
          <StyledListItem>
            <label forhtml="sand">Sand</label>
            <StyledRadioInput type="radio" name="court" id="sand" value="sand" />
          </StyledListItem>
          <StyledListItem>
            <label forhtml="carpet">Carpet</label>
            <StyledRadioInput type="radio" name="court" id="carpet" value="carpet" />
          </StyledListItem>
          <StyledListItem>
            <label forhtml="concrete">Concrete</label>
            <StyledRadioInput type="radio" name="court" id="concrete" value="concrete" />
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
