import styled from "styled-components";
import { useRouter } from "next/router";
import { BsChevronLeft } from "react-icons/bs";
import Image from "next/image";

export default function Header() {
  const router = useRouter();

  return (
    <HeadWrapper>
      <IconContainer onClick={() => router.back()}>
        <PreviousPageIcon />
      </IconContainer>
      <LogoContainer onClick={() => router.push("/gamelist")}>
        <Image
          src="/header_logo_bold.svg"
          alt="Logo"
          width="216"
          height="133"
          objectFit="fill"
          layout="responsive"
          priority="true"
        />
      </LogoContainer>
    </HeadWrapper>
  );
}

const HeadWrapper = styled.header`
  background: var(--background-navigation);
  border-radius: 0;
  height: 60px;
  display: flex;
  align-items: center;
`;

const IconContainer = styled.button`
  position: absolute;
  z-index: 200;
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: var(--text-navigation);
  margin-left: 1em;
`;

const LogoContainer = styled.div`
  position: relative;
  z-index: 200;
  width: 70px;
  margin: 0 auto;
  cursor: pointer;
`;

const PreviousPageIcon = styled(BsChevronLeft)`
  font-size: 1.4em;
`;
