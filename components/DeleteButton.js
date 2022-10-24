import styled from "styled-components";

export default function DeleteButton({ children, handleClick, id }) {
  return <StyledButton onClick={() => handleClick(id)}>{children}</StyledButton>;
}

const StyledButton = styled.button`
  padding: 0.2em 0.5em;
  margin: 0 1em;
  background-color: transparent;
  color: var(--text-primary);
  font-size: 1.5em;
  border: none;

  &:hover {
    transition: 0.2s ease-in-out;
    padding: 0.1em 0em;
    margin: 0 1em;
    font-size: 2em;
  }

  &:active {
    transition: 0.2s ease;
    color: #d74123;
  }
`;
