import styled from "styled-components";

export default function CardDetails() {
  return (
    <DetailsContainer>
      <DetailsHeadline>Das ist eine H3</DetailsHeadline>
      <DetailsResults>
        <Content>Result:</Content>
        <Content>Won</Content>
      </DetailsResults>
      <DetailsFirstSet>
        <Content>Set 1</Content>
        <Content>XX : YY</Content>
      </DetailsFirstSet>
      <DetailsSecondSet>
        <Content>Set 2</Content>
        <Content>XX : YY</Content>
      </DetailsSecondSet>
      <DetailsThirdSet>
        <Content>Set 3</Content>
        <Content>XX : YY</Content>
      </DetailsThirdSet>
    </DetailsContainer>
  );
}

const DetailsContainer = styled.section`
  position: relative;
  display: grid;
  grid-template-areas:
    "headline headline headline headline"
    "results setone settwo setthree"
    "results setone settwo setthree";
  padding-top: 1em;
`;

const DetailsHeadline = styled.h3`
  grid-area: headline;
  text-align: center;
  padding-bottom: 1em;
`;

const Content = styled.p`
  text-align: center;
`;

const DetailsResults = styled.p`
  grid-area: results;
  margin: 0 auto;
`;

const DetailsFirstSet = styled.p`
  grid-area: setone;
  margin: 0 auto;
`;

const DetailsSecondSet = styled.p`
  grid-area: settwo;
  margin: 0 auto;
`;

const DetailsThirdSet = styled.p`
  grid-area: setthree;
  margin: 0 auto;
`;
