import styled from "styled-components";

export default function EditButton({ children, handleClick }) {
  return <StyledButton onClick={() => handleClick()}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: transparent;
  color: var(--text-primary);
  font-size: 1.9em;
  border: none;

  &:hover {
    transition: 0.1s ease-in-out;
    color: var(--color-tertiary);
  }
`;
