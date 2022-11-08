import styled from "styled-components";
import useStore from "../../store/useStore";
import { FaRegCheckCircle } from "react-icons/fa";

export default function Modal({ headline }) {
  const closeModal = useStore((state) => state.closeModal);

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeadline>{headline}</ModalHeadline>
        <StyledConfirmButton onClick={() => closeModal()}>
          <FaRegCheckCircle />
        </StyledConfirmButton>
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
  gap: 1em;
  width: 80%;
  max-width: 450px;
  height: 250px;

  padding: 1em 1em;
  border-radius: 10px;
  background: var(--background-primary);
  box-shadow: 3px 5px 4px var(--background-tertiary);
`;

const ModalHeadline = styled.h3`
  text-align: center;
  margin: 0;
  padding: 0.5em;
`;

const StyledConfirmButton = styled.button`
  background-color: transparent;
  color: var(--attention-color-primary);
  font-size: 2.5em;
  border: none;

  &:hover {
    transition: 0.1s ease-in;
    color: hsla(141, 50%, 50%, 1);
  }
`;
