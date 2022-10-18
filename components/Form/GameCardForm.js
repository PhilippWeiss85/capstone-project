import styled from "styled-components";
import AddButton from "../Button/Button";

export default function AddGameCardForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formdata = new FormData(event.target);
    const data = Object.fromEntries(formdata);
    console.log(data);
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledFieldSetRadioButtons>
        <StyledLegend>Match Type:</StyledLegend>
        <StyledList>
          <StyledListItem>
            <label forhtml="match">Match</label>
            <StyledRadioInput type="radio" name="radio-button" id="match" value="match" />
          </StyledListItem>
          <StyledListItem>
            <label forhtml="training">Training</label>
            <StyledRadioInput
              type="radio"
              name="radio-button"
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
      <select>
        <option name="place" id="place">
          Rothof
        </option>
        <option name="place" id="place">
          Sportscheck
        </option>
        <option name="place" id="place">
          Fidelopark
        </option>
      </select>

      <AddButton type="submit">Add GameCard</AddButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  border-radius: 5px;
`;

const StyledFieldSetRadioButtons = styled.fieldset`
  border: none;
`;

const StyledLegend = styled.legend``;

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
