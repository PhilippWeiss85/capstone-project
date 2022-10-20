import styled from "styled-components";

export default function EditButton({ children }) {
  return <StyledButton>{children}</StyledButton>;
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
    box-shadow: 1px 1px #d74123;
    filter: drop-shadow(2px 2px 2px #d74123);
    padding: 0.1em 0.5em;
    margin: 0 1em;
    font-size: 1.7em;
  }

  &:active {
    transition: 0.2s ease;
    color: #d74123;
  }
`;
