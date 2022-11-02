import styled from "styled-components";
import { useRouter } from "next/router";
import { BsList } from "react-icons/bs";

export default function Header() {
  const router = useRouter();

  return (
    <HeadWrapper>
      {router.pathname === "/gamelist" ? (
        <h1>Gamelist Headline</h1>
      ) : router.pathname === "/lessons" ? (
        <h1>Lessons Headline</h1>
      ) : router.pathname === "/statistics" ? (
        <h1>Statistics Headline</h1>
      ) : (
        router.pathname === "/form" && <h1>Create a new card</h1>
      )}
      <StyledNav>
        <BsList />
      </StyledNav>
    </HeadWrapper>
  );
}

const HeadWrapper = styled.main`
  background-color: var(--background-navigation);
  margin-bottom: 2em;

  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const StyledNav = styled.nav`
  position: absolute;
  top: 0.7em;
  right: 0.2em;
  font-size: 2em;
`;
