import styled from "styled-components";
import { useRouter } from "next/router";
import { BiHomeHeart } from "react-icons/bi";
import { RiAddLine } from "react-icons/ri";
import { BsJournalText } from "react-icons/bs";

export default function Footer() {
  const router = useRouter();

  return (
    <FooterWrapper>
      <IconWrapper type="button" onClick={() => router.push("/gamelist")}>
        <BiHomeHeart />
      </IconWrapper>
      <IconWrapper type="button" onClick={() => router.push("/form")}>
        <RiAddLine />
      </IconWrapper>
      <IconWrapper type="button" onClick={() => router.push("/lessons")}>
        <BsJournalText />
      </IconWrapper>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  background: var(--background-navigation);
  position: fixed;
  width: 100%;
  height: 60px;
  bottom: 0;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 500;
  border-radius: 0;
`;

const IconWrapper = styled.button`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 2em;
  height: auto;
  width: 4em;
  height: 60px;
  border-radius: 0;
  color: var(--text-navigation);

  &:hover {
    transition: 0.33s ease-in-out;
    color: var(--background-navigation);
    background-color: var(--text-navigation);
  }
`;
