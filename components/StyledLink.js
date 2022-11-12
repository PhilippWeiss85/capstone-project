import styled from "styled-components";

const AnchorLink = styled.a`
  padding: 0.2em 0.5em;
  filter: drop-shadow(5px 4px 4px #000000);
  margin: 0 1em;
  background-color: var(--background-primary);
  /* color: var(--text-primary); */
  color: ${({ active }) => (active ? "lime" : "white")};
  cursor: pointer;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.2em;

  &:hover {
    background-color: var(--background-secondary);
  }
`;

export default AnchorLink;
