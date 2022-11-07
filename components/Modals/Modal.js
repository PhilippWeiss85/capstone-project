import styled from "styled-components";
import Button from "../Button";
import { useState } from "react";

export default function Modal({ toggleModal, headline, text, buttontext }) {
  const [modalToggle, setModalToggle] = useState(false);

  function toggleModal() {
    setModalToggle((PreviousModal) => !PreviousModal);
  }

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeadline>das ist eine headline</ModalHeadline>
        <ModalText>das ist ein text</ModalText>
        <Button handleCLick={toggleModal}>dummytext</Button>
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
