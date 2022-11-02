import styled from "styled-components";
import { useRouter } from "next/router";
import { BsChevronDoubleLeft } from "react-icons/bs";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

export default function Header() {
  const router = useRouter();

  return (
    <HeadWrapper>
      <PreviousPageIcon onClick={() => router.back()}>
        <BsChevronDoubleLeft />
      </PreviousPageIcon>
      {router.pathname === "/gamelist" ? (
        <h1>Gamelist Headline</h1>
      ) : router.pathname === "/lessons" ? (
        <h1>Lessons Headline</h1>
      ) : router.pathname === "/statistics" ? (
        <h1>Statistics Headline</h1>
      ) : (
        router.pathname === "/form" && <h1>Create a new card</h1>
      )}
      <MenuWrapper>
        <BurgerMenu />
      </MenuWrapper>
    </HeadWrapper>
  );
}

const HeadWrapper = styled.main`
  background-color: var(--background-navigation);
  margin-bottom: 2em;
  padding: 0 1em;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PreviousPageIcon = styled.button`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 1.8em;
`;

const MenuWrapper = styled.div`
  height: 2em;
  width: 2em;
`;
