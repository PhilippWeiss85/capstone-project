import styled from "styled-components";

export default function Button({ children, handleClick }) {
  return <StyledButton onClick={() => handleClick()}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  padding: 0.2em 0.5em;
  filter: drop-shadow(5px 4px 4px #000000);
  margin: 0 1em;
  background-color: var(--background-primary);
  color: var(--text-primary);
  font-size: 1.2em;
  border: none;

  &:hover {
    background-color: var(--background-secondary);
  }

  &:active {
    box-shadow: 3px 3px var(--attention-color-primary);
    background-color: var(--background-primary);
  }
`;
