import styled from "styled-components";

const AnchorLink = styled.a`
  padding: 0.2em 0.5em;
  filter: drop-shadow(5px 4px 4px #000000);
  margin: 0 1em;
  background-color: var(--background-primary);
  color: var(--text-primary);
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: var(--background-secondary);
  }

  &:active {
    box-shadow: 3px 3px black;
  }
`;

export default AnchorLink;
