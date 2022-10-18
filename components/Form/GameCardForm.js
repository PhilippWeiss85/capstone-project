import styled from "styled-components";
import AddButton from "../Button/Button";

export default function AddGameCardForm() {
  return (
    <StyledForm>
      <StyledFieldSet>
        <legend>Match Type:</legend>
        <label forhtml="match">Match</label>
        <input type="radio" name="radio-button" id="match" value="match" />
        <label forhtml="training">Training</label>
        <input type="radio" name="radio-button" id="training" value="training" />
      </StyledFieldSet>
      <StyledFieldSet>
        <legend>Test</legend>
        <label forhtml="opponent">Opponent`s Name</label>
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
      </StyledFieldSet>
      <AddButton type="submit">Add GameCard</AddButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  width: 80%;
  margin: 0 auto;
`;

const StyledFieldSet = styled.fieldset`
  margin: 1rem 0;
`;
