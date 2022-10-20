import styled from "styled-components";

export default function DeleteButton({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  padding: 0.2em 0.5em;
  margin: 0 1em;
  background-color: transparent;
  color: var(--text-primary);
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5em;
  border: none;

  &:hover {
    transition: 0.2s ease;
    filter: drop-shadow(5px 4px 4px red);
    padding: 0.1em 0.5em;
    margin: 0 1em;
    font-size: 1.7em;
  }

  &:active {
    transition: 0.2s ease;
    color: red;
  }
`;
