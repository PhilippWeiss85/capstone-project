import styled from "styled-components";
import { useRouter } from "next/router";
import { BsChevronDoubleLeft } from "react-icons/bs";

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
      <StyledNav></StyledNav>
    </HeadWrapper>
  );
}

const HeadWrapper = styled.main`
  background-color: var(--background-navigation);
  margin-bottom: 2em;
  padding: 0 2em;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const StyledNav = styled.nav`
  top: 0.7em;
  right: 0.2em;
  font-size: 2em;
`;

const PreviousPageIcon = styled.button`
  background: none;
  color: inherit;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-size: 1.5em;
`;
