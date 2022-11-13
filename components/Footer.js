import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiHomeHeart } from "react-icons/bi";
import { RiAddLine } from "react-icons/ri";
import { BsJournalText } from "react-icons/bs";

export default function Footer() {
  const { pathname } = useRouter();

  return (
    <StyledFooter>
      <NavWrapper>
        <Link href="/gamelist" passHref>
          <NavItem isActive={pathname === "/gamelist"}>
            <BiHomeHeart />
          </NavItem>
        </Link>
        <Link href="/form" passHref>
          <NavItem isActive={pathname === "/form"}>
            <RiAddLine />
          </NavItem>
        </Link>
        <Link href="/lessons" passHref>
          <NavItem isActive={pathname === "/lessons"}>
            <BsJournalText />
          </NavItem>
        </Link>
      </NavWrapper>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  background: var(--background-navigation);
  width: 100%;
  height: 60px;
  z-index: 500;
  border-radius: 0;
  position: fixed;
  bottom: 0;
`;

const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2em;
  border-radius: 0;
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ isActive }) =>
    isActive ? "var(--text-navigation)" : "var(--background-navigation)"};
  height: 60px;
  width: 100%;
  border-radius: 0;
  color: ${({ isActive }) =>
    isActive ? "var(--background-navigation)" : "var(--text-navigation)"};

  &:hover {
    background: var(--text-navigation);
    color: var(--background-navigation);
  }
`;
