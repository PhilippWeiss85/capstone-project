import styled from "styled-components";

export default function EditButton({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

const StyledButton = styled.button`
  background-color: transparent;
  color: var(--text-primary);
  font-size: 1.9em;
  border: none;

  &:hover {
    transition: 0.2s ease-in-out;
  }

  &:active {
    color: #d74123;
  }
`;
