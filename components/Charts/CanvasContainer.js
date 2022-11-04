import styled from "styled-components";

export const PieChartContainer = styled.div`
  height: 320px;
  display: inline-block;
  padding-bottom: 0.5em;
  margin: 0 1em;
  background: var(--background-tertiary);

  @media (min-width: 500px) {
    height: 400px;
    padding-top: 4em;
    margin: 1em 1em;
  }
`;

export const BarChartContainer = styled.div`
  height: 320px;
  display: inline-block;
  padding: 0.5;
  margin: 0 1em;
  background: var(--background-tertiary);

  @media (min-width: 500px) {
    height: 400px;
    padding-top: 4em;
    margin: 1em 1em;
  }
`;
