import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import AnchorLink from "../components/StyledLink";

export default function Home() {
  return (
    <div>
      <Head>
        <title>My App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainWrapper>
        <h1>My App</h1>
        <Link href="/form" passHref>
          <AnchorLink>form</AnchorLink>
        </Link>
      </MainWrapper>
    </div>
  );
}

const MainWrapper = styled.main`
  text-align: center;
`;
