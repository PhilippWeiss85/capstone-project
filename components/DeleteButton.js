import styled from "styled-components";

export default function DeleteButton({ children, handleClick }) {
  return (
    <>
      <StyledButton onClick={() => handleClick()}>{children}</StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  padding: 0.2em 0.5em;
  filter: drop-shadow(2px 3px 3px #000000);
  margin: 0 1em;
  background-color: var(--attention-color-primary);
  color: var(--text-secondary);
  font-size: 1.2em;
  border: none;

  &:hover {
    box-shadow: 3px 3px var(--background-navigation);
  }

  &:active {
    box-shadow: 3px 3px var(--background-primary);
  }
`;
