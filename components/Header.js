import styled from "styled-components";
import { useRouter } from "next/router";
import { BsChevronLeft } from "react-icons/bs";

export default function Header() {
  const router = useRouter();

  return (
    <HeadWrapper>
      <IconContainer onClick={() => router.back()}>
        <PreviousPageIcon />
      </IconContainer>
      <Headline>Courtisoul</Headline>
    </HeadWrapper>
  );
}

const HeadWrapper = styled.header`
  background: var(--background-navigation);
  border-radius: 0;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Headline = styled.h1`
  position: relative;
  /* margin-left: 1em; */
  color: var(--text-navigation);
`;

const IconContainer = styled.button`
  position: absolute;
  z-index: 200;
  background: none;
  left: 0;
  top: 5px;
  height: 50px;
  width: 50px;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: var(--text-navigation);

  &:hover {
    transition: 0.1s ease-in-out;
    color: var(--text-secondary);
  }
`;

const PreviousPageIcon = styled(BsChevronLeft)`
  font-size: 1.4em;
`;
