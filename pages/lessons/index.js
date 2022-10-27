import styled from "styled-components";
import Image from "next/image";

export default function LessonsList() {
  return (
    <>
      <h1>headline</h1>
      <MainWrapper>
        <LessonContainer>
          1<Image></Image>
        </LessonContainer>
        <LessonContainer>
          2<Image></Image>
        </LessonContainer>
        <LessonContainer>
          3<Image></Image>
        </LessonContainer>
        <LessonContainer>
          4<Image></Image>
        </LessonContainer>
        <LessonContainer>
          5<Image></Image>
        </LessonContainer>
        <LessonContainer>
          6<Image></Image>
        </LessonContainer>
      </MainWrapper>
    </>
  );
}

const MainWrapper = styled.main`
  text-align: center;
  display: grid;

  gap: 2em;
`;

const LessonContainer = styled.section`
  border: 1px solid black;
  width: 40%;
  height: 25vh;
`;
