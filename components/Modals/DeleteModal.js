import Button from "../Button";
import styled from "styled-components";
import useStore from "../../store/useStore";
import DeleteButton from "../DeleteButton";

export default function DeleteModal({ id, setDeleteModal, deleteModal }) {
  const deleteGame = useStore((state) => state.deleteGame);
  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeadline>blablab</ModalHeadline>
        <ModalText>blabalbalbal</ModalText>
        <ButtonContainer>
          <DeleteButton id={id} handleClick={deleteGame}>
            delete
          </DeleteButton>
          <Button handleClick={() => setDeleteModal(false)}>cancel</Button>
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
  backdrop-filter: blur(30px);
`;

const ModalContainer = styled.article`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 30%;
  padding: 1em 1em;
  border-radius: 10px;
  background: var(--background-primary);
  box-shadow: 3px 5px 4px var(--background-tertiary);
`;

const ModalHeadline = styled.h3`
  margin: 0;
  padding: 0.5em;
`;

const ModalText = styled.p`
  padding: 0.5em;
`;

const ButtonContainer = styled.div`
  display: flex;
`;
