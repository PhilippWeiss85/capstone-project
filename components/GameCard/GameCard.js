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
            <StyledContentHeadlines>Date:</StyledContentHeadlines>
            <p>{date}</p>
          </article>
          <article>
            <StyledContentHeadlines>Time:</StyledContentHeadlines>
            <p>{time}</p>
          </article>
          <article>
            <StyledContentHeadlines>Place:</StyledContentHeadlines>
            <p>{place}</p>
          </article>
          <article>
            <StyledContentHeadlines>Court:</StyledContentHeadlines>
            <p>{court}</p>
          </article>
        </StyledCardContent>
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

const StyledContentHeadlines = styled.p`
  font-weight: bold;
`;
