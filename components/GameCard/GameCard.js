import { useState } from "react";
import EditButton from "../EditButton";
import CardDetails from "../GameDetailForm/GameDetailForm";
import GameResult from "../GameResult/GameResult";
import DeleteModal from "../Modals/DeleteModal";
import Image from "next/image";

import styled from "styled-components";
import { BsX } from "react-icons/bs";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";
import { BsCalendar3, BsClockHistory } from "react-icons/bs";
import { GiPositionMarker, GiTennisCourt } from "react-icons/gi";

export default function GameCard({
  type,
  name,
  date,
  time,
  place,
  court,
  id,
  results,
  image,
}) {
  const [showMore, setShowMore] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  // show detailed card information
  function showMoreDetails() {
    setShowMore((previousDetails) => !previousDetails);
  }

  return (
    <Card>
      {deleteModal && (
        <DeleteModal type={type} name={name} id={id} setDeleteModal={setDeleteModal} />
      )}
      <CardType type={type}>{type}</CardType>
      <CardContainer>
        <PlayersAndResults>
          <PlayerImageContainer>
            <Image
              src={image}
              alt={name}
              layout="fill"
              objectFit="cover"
              priority="true"
            ></Image>
          </PlayerImageContainer>

          <PlayerNameContainer>{name}</PlayerNameContainer>
          {results.gameresult === "" ? (
            ""
          ) : (
            <ResultContainer>
              <GameResult results={results} />
            </ResultContainer>
          )}
        </PlayersAndResults>

        <DeleteButtonContainer>
          <StyledDeleteButton onClick={() => setDeleteModal(true)}>
            <BsX />
          </StyledDeleteButton>
        </DeleteButtonContainer>
        <CardList>
          <DateHeadline>
            <BsCalendar3 />
          </DateHeadline>
          <StyledContent> {date}</StyledContent>

          <TimeHeadline>
            <BsClockHistory />
          </TimeHeadline>
          <StyledContent>{time} </StyledContent>

          <PlaceHeadline>
            <GiPositionMarker />
          </PlaceHeadline>
          <StyledContent> {place} </StyledContent>

          <CourtHeadline>
            <GiTennisCourt />
          </CourtHeadline>
          <StyledContent>{court}</StyledContent>
        </CardList>

        {showMore && (
          <CardDetails showMoreDetails={showMoreDetails} id={id} results={results} />
        )}
        <EditButtonContainer>
          <EditButton
            type="button"
            aria-label="open details"
            handleClick={showMoreDetails}
            role="toggle"
          >
            {showMore === true ? <TbChevronUp /> : <TbChevronDown />}
          </EditButton>
        </EditButtonContainer>
      </CardContainer>
    </Card>
  );
}

const Card = styled.section`
  position: relative;
`;

const CardType = styled.h2`
  position: absolute;
  top: -2em;
  left: 0.3em;
  padding: 0.2em 0.4em;
  z-index: 200;
  font-weight: normal;
  color: var(--text-primary);
  background: ${({ type }) =>
    type === "Match" ? "hsla(90, 100%, 50%, 0.8)" : "	hsl(75, 100%, 60%, 0.8) "};
`;

const CardContainer = styled.section`
  padding: 1em 1em 0 1em;
  margin: 2em 0.5em 3em 0.5em;
  mix-blend-mode: normal;
  position: relative;
  border-radius: 0;
  box-shadow: 0 2px 0 0 var(--background-tertiary);
  background: var(--background-secondary);
`;

const PlayersAndResults = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0.3em 0 1em 0;
  gap: 0.5em;
  font-size: 1.3em;
`;

const PlayerImageContainer = styled.div`
  position: relative;
  border-radius: 50%;
  width: 75px;
  overflow: hidden;
  aspect-ratio: 1;
  background-color: #ffffff;
`;

const PlayerNameContainer = styled.div`
  mix-blend-mode: normal;
  padding: 0.2em 0.5em;
  font-size: 0.7em;
  width: 30%;
  word-break: break-word;
`;

const ResultContainer = styled.div`
  position: relative;
  width: 40%;
  font-size: 0.7em;
  margin-top: 0em;
  align-self: flex-start;
`;

const DeleteButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
`;

const EditButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 30px;
`;

const CardList = styled.article`
  position: relative;
  display: grid;
  grid-template-areas: "date" "time" "place" "court";
  grid-template-columns: 1fr 1.5fr;
  grid-auto-flow: column;
  padding: 0 1em;
  margin-bottom: 0.5em;
  border-radius: 0;
  background-color: var(--background-primary);
`;

const DateHeadline = styled.p`
  grid-area: date;
  margin: 0.2em 0;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
const TimeHeadline = styled.p`
  grid-area: time;
  margin: 0.2em 0;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
const PlaceHeadline = styled.p`
  grid-area: place;
  margin: 0.2em 0;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  gap: 0.5em;
`;
const CourtHeadline = styled.p`
  grid-area: court;
  margin: 0.2em 0;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const StyledContent = styled.p`
  margin: 0.2em 0;
  font-size: 1em;
`;

const StyledDeleteButton = styled.button`
  background-color: transparent;
  color: var(--attention-color-primary);
  font-size: 1.7em;
  border: none;

  &:hover {
    transition: 0.1s ease-in;
    font-size: 2em;
  }
`;
