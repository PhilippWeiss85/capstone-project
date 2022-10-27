import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function LessonsList() {
  return (
    <>
      <h1>Your Training Progress</h1>
      <MainWrapper>
        <ForehandContainer>
          <LessonHeadline>Forehand</LessonHeadline>
          <Link href={`/lessons/`}>
            <Image
              src="/assets/forehand_female.jpg"
              alt="forehand lesson"
              layout="responsive"
              objectFit="contain"
              width={1024}
              height={512}
            />
          </Link>
        </ForehandContainer>
        <BackhandContainer>
          <LessonHeadline>Backhand</LessonHeadline>
          <Link href={`/lessons/`}>
            <Image
              src="/assets/backhand_female.jpg"
              alt="backhand lesson"
              layout="responsive"
              objectFit="contain"
              width={1024}
              height={512}
            />
          </Link>
        </BackhandContainer>
        <SliceContainer>
          <LessonHeadline>Slice</LessonHeadline>
          <Link href={`/lessons/`}>
            <Image
              src="/assets/backhand_slice_male.jpg"
              alt="slice lesson"
              layout="responsive"
              objectFit="contain"
              width={1024}
              height={512}
            />
          </Link>
        </SliceContainer>
        <VolleyContainer>
          <LessonHeadline>Serve</LessonHeadline>
          <Link href={`/lessons/`}>
            <Image
              src="/assets/serve_male.jpg"
              alt="serve lesson"
              layout="responsive"
              objectFit="contain"
              width={1024}
              height={512}
            />
          </Link>
        </VolleyContainer>
        <ServeContainer>
          <LessonHeadline>Volley</LessonHeadline>
          <Link href={`/lessons/`}>
            <Image
              src="/assets/volley_male.jpg"
              alt="volley lesson"
              layout="responsive"
              objectFit="contain"
              width={1024}
              height={512}
            />
          </Link>
        </ServeContainer>
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.main`
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2em;
`;

const LessonHeadline = styled.h2`
  z-index: 100;
  position: relative;
`;

const ForehandContainer = styled.section`
  grid-area: forehand;
  position: relative;
  overflow: hidden;
  width: 40%;
  max-width: 512px;
  height: 25vh;
  padding: 0;
  border-radius: 5px;
`;

const BackhandContainer = styled.section`
  grid-area: backhand;
  position: relative;
  overflow: hidden;
  width: 40%;
  max-width: 512px;
  height: 25vh;
  padding: 0;
  border-radius: 5px;
`;
const SliceContainer = styled.section`
  grid-area: slice;
  position: relative;
  overflow: hidden;
  width: 40%;
  max-width: 512px;
  height: 25vh;
  padding: 0;
  border-radius: 5px;
`;
const VolleyContainer = styled.section`
  grid-area: volley;
  position: relative;
  overflow: hidden;
  width: 40%;
  max-width: 512px;
  height: 25vh;
  padding: 0;
  border-radius: 5px;
`;
const ServeContainer = styled.section`
  grid-area: serve;
  position: relative;
  overflow: hidden;
  width: 40%;
  max-width: 512px;
  height: 25vh;
  padding: 0;
  border-radius: 5px;
`;
