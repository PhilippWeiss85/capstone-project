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
        <StyledCardContent>
          <article>
            <h5>Date:</h5>
            <p>{date}</p>
          </article>
          <article>
            <h5>Time:</h5>
            <p>{time}</p>
          </article>
          <article>
            <h5>Place:</h5>
            <p>{place}</p>
          </article>
          <article>
            <h5>Court:</h5>
            <p>{court}</p>
          </article>
        </StyledCardContent>
      </StyledCardContainer>
    </section>
  );
}

const StyledGameHeadline = styled.h3`
  position: relative;
  margin: 0 0 0 0.5em;
`;

const StyledCardContainer = styled.section`
  background-color: lightgrey;
  padding: 1rem;
  margin: 0 10px 1em;
  box-shadow: 3px 5px black;
`;

const StyledCardPlayer = styled.article`
  border: 1px solid black;
  padding: 0.5em;
`;

const StyledCardContent = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  padding: 0.5em;
`;
