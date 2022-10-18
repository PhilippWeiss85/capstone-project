import styled from "styled-components";

export default function AddGameCardForm() {
  return (
    <form>
      <fieldset>
        <legend>Match Type:</legend>
        <label forhtml="match">Match</label>
        <input type="radio" name="radio-button" id="match" value="match" />
        <label forhtml="training">Training</label>
        <input type="radio" name="radio-button" id="training" value="training" />
      </fieldset>
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
      <button type="submit">Add GameCard</button>
    </form>
  );
}
