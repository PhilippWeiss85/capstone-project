import styled from "styled-components";

export const ChartContainer = styled.div`
  height: 320px;
  display: inline-block;
  padding-bottom: 0.5em;
  margin: 0 1em;
  /* background: var(--background-tertiary); */
  box-shadow: 0 4px 2px -2px #ffffff;

  @media (min-width: 500px) {
    height: 400px;
    padding-top: 4em;
    margin: 1em 1em;
  }
`;
