import styled from "styled-components";

export const CanvasContainer = styled.div`
  max-width: 300px;
  width: 60vw;
  height: 250px;
  display: inline-block;
  padding-bottom: 1em;
  vertical-align: top;
  margin: 0 1em;
  background: var(--background-tertiary);

  @media (min-width: 500px) {
    height: 400px;
    padding-top: 4em;
    margin: 1em 1em;
  }
`;
