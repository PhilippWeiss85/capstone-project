import Header from "./Header";
import styled from "styled-components";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <StyledMain>{children}</StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  min-height: calc(100vh - 8rem);
`;
