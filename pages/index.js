import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import lottie from "lottie-web";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Home() {
  const container = useRef(null);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      repeat: false,
      path: "/tennis-ball.json", // the path to the animation json
    });
    return () => animation.destroy(); // to prevent rendering of a second animation container
  }, []);

  return (
    <div>
      <Head>
        <title>Project Courtisoul</title>
        <meta name="Your Tennis Companion" content="Tennis Organizer with Tutorials" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainWrapper>
        <Styledh1>Welcome to</Styledh1>
        <Image src="/main_logo_bold.svg" alt="Logo" width="216" height="133"></Image>
        <AnimationContainer ref={container}></AnimationContainer>
        <Link href="/gamelist" passHref>
          <Styledh2>Click to enter</Styledh2>
        </Link>
      </MainWrapper>
    </div>
  );
}

const MainWrapper = styled.main`
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 6em;
  align-items: center;
  height: 100vh;
  background-color: var(--background-primary);
`;

const Styledh1 = styled.h1`
  position: relative;
  color: rgba(17, 59, 94, 1);
`;

const AnimationContainer = styled.div`
  height: 300px;
  padding-top: 5em;
`;

const Styledh2 = styled.h2`
  position: relative;
  color: rgba(17, 59, 94, 1);
  :hover {
    color: var(--text-navigation);
    cursor: pointer;
  }
`;
