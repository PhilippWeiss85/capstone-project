import styled from "styled-components";

export const ChartContainer = styled.div`
  height: 230px;
  display: inline-block;
  padding-bottom: 0.5em;
  margin: 0 1em;
  /* background: var(--background-secondary); */

  @media (min-width: 500px) {
    height: 400px;
    padding: 1em;
    margin: 1em 1em;
  }
`;
