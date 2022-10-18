import GameCardForm from "../../components/Form/GameCardForm";
import styled from "styled-components";

export default function Form() {
  return (
    <>
      <StyledHeadline>hello world</StyledHeadline>
      <GameCardForm />
    </>
  );
}

const StyledHeadline = styled.h1`
  text-align: center;
`;
