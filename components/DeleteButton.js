import styled from "styled-components";

export default function DeleteButton({ children, handleClick, id }) {
  return (
    <>
      <StyledButton onClick={() => handleClick(id)}>{children}</StyledButton>
    </>
  );
}

const StyledButton = styled.button`
  background-color: transparent;
  color: var(--attention-color-primary);
  font-size: 1.5em;
  border: none;

  &:hover {
    transition: 0.2s ease-in-out;
    font-size: 2em;
  }

  &:active {
    transition: 0.2s ease;
  }
`;
