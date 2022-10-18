import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";

export default function GameCard({ type, name, date, time, place, court }) {
  return (
    <section>
      <StyledGameHeadline>{type}</StyledGameHeadline>
      <StyledCardContainer>
        <StyledCardPlayer>
          <p>
            <BsPersonCircle /> {name}
          </p>
        </StyledCardPlayer>
        <StyledCardList>
          <li>
            <p>Date:</p>
            <p>{date}</p>
          </li>
          <li>
            <p>Time:</p>
            <p>{time}</p>
          </li>
          <li>
            <p>Place:</p>
            <p>{place}</p>
          </li>
          <li>
            <p>Court:</p>
            <p>{court}</p>
          </li>
        </StyledCardList>
      </StyledCardContainer>
    </section>
  );
}

const StyledGameHeadline = styled.h2`
  position: relative;
  margin: 0 0 0 0.5em;
`;

const StyledCardContainer = styled.section`
  background-color: lightgrey;
  padding: 1em;
  margin: 0 1em 1em;
  box-shadow: 3px 5px black;
`;

const StyledCardPlayer = styled.article`
  border: 1px solid black;
  padding: 0.5em;
`;

const StyledCardList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  padding: 0.5em;
  list-style: none;
`;
