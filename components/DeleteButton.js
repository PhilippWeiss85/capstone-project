import styled from "styled-components";
import useStore from "../store/useStore";
import DeleteModal from "./Modals/DeleteModal";

export default function DeleteButton({ children, handleClick, id }) {
  const activateModal = useStore((state) => state.activateModal);
  const modal = useStore((state) => state.modal);

  return (
    <>
      <StyledButton onClick={() => handleClick(id)}>{children}</StyledButton>
    </>
  );
  // return <StyledButton onClick={() => handleClick(id)}>{children}</StyledButton>;
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
