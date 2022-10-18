import styled from "styled-components";

export default function GameCard() {
  return (
    <StyledCardContainer>
      <h3>type</h3>
      <StyledCardHeader>
        <p>name:</p>
        <p>name</p>
      </StyledCardHeader>
      <StyledCardContent>
        <article>
          <h5>date:</h5>
          <p>date</p>
        </article>
        <article>
          <h5>time:</h5>
          <p>time</p>
        </article>
        <article>
          <h5>Place:</h5>
          <p>place</p>
        </article>
        <article>
          <h5>Court:</h5>
          <p>court</p>
        </article>
      </StyledCardContent>
    </StyledCardContainer>
  );
}

const StyledCardContainer = styled.section`
  background-color: lightgrey;
  padding: 1rem;
  margin: 10px;
  box-shadow: 3px 5px black;
`;

const StyledCardHeader = styled.article`
  display: flex;
  justify-content: left;
  border: 1px solid black;
  padding: 0.5rem;
`;

const StyledCardContent = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid black;
  padding: 0.5rem;
`;
