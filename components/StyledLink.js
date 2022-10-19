import styled from "styled-components";

const AnchorLink = styled.a`
  padding: 0.2em 0.5em;
  filter: drop-shadow(5px 4px 4px #000000);
  margin: 0 1em;
  background-color: var(--background-primary);
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: white;
  }
`;

export default AnchorLink;
