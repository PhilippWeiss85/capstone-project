import styled from "styled-components";
import Link from "next/link";

export default function BurgerOverlay() {
  return (
    <StyledNav>
      <LinkContainer>
        <Link href="/gamelist">
          <StyledLink>Gamelist</StyledLink>
        </Link>
      </LinkContainer>
      <LinkContainer>
        <Link href="/lessons">
          <StyledLink>Lessons</StyledLink>
        </Link>
      </LinkContainer>
    </StyledNav>
  );
}

const StyledNav = styled.ul`
  width: 6em;
  height: 6em;
  z-index: 200;
  right: 1em;
  top: 4em;
  position: absolute;
  background-color: var(--background-tertiary);
  list-style: none;
  box-shadow: 1px 2px 3px var(--box-shadow);
`;

const LinkContainer = styled.li`
  padding: 0.5em;
  margin: 0.5em;
  background-color: var(--background-primary);
`;

const StyledLink = styled.a`
  &:hover {
    color: var(--attention-color-primary);
  }
`;
