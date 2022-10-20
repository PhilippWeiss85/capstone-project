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
  font-size: 1.2em;
  border: none;

  &:hover {
    filter: drop-shadow(2px 2px 2px red);
  }

  &:active {
    transition: 0.2s ease;
    color: red;
  }
`;
