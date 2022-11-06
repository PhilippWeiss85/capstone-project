import styled from "styled-components";
import { useRouter } from "next/router";
import { BsChevronDoubleLeft } from "react-icons/bs";

export default function Header() {
  const router = useRouter();

  return (
    <HeadWrapper>
      <IconContainer onClick={() => router.back()}>
        <PreviousPageIcon />
      </IconContainer>
      <Headline>My Tennis App</Headline>
    </HeadWrapper>
  );
}

const HeadWrapper = styled.main`
  background-color: var(--background-navigation);
  border-radius: 0;
  margin-bottom: 2em;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Headline = styled.h1`
  text-align: center;
  color: var(--text-navigation);
`;

const IconContainer = styled.button`
  position: absolute;
  left: 1em;
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: var(--text-navigation);
`;

const PreviousPageIcon = styled(BsChevronDoubleLeft)`
  font-size: 2em;
  &:hover {
    transition: 0.1s ease-in-out;
    fill: var(--background-primary);
  }
`;
