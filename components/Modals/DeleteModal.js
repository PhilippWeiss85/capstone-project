import Button from "../Button";
import styled from "styled-components";
import useStore from "../../store/useStore";
import DeleteButton from "../DeleteButton";

export default function DeleteModal({ id, setDeleteModal, type, name }) {
  const deleteGame = useStore((state) => state.deleteGame);
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeadline>
          Are you sure you want to delete your {type} with {name}?
        </ModalHeadline>
        <ButtonContainer>
          <DeleteButton handleClick={() => deleteGame(id)}>Delete</DeleteButton>
          <Button handleClick={() => setDeleteModal(false)}>Cancel</Button>
        </ButtonContainer>
      </ModalContainer>
    </ModalOverlay>
  );
}

const ModalOverlay = styled.section`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 300;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  backdrop-filter: blur(1px);
`;

const ModalContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 450px;
  height: 250px;
  padding: 1em 1em;
  border-radius: 10px;
  background: var(--background-secondary);
  box-shadow: 3px 5px 4px var(--background-tertiary);
`;

const ModalHeadline = styled.h3`
  text-align: center;
  padding: 1em 0.5em;
  margin: 0;
`;

const ButtonContainer = styled.div`
  display: flex;
`;
