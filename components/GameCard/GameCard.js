import { useState } from "react";
import useStore from "../../store/useStore";

import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import CardDetails from "../GameDetailForm/GameDetailForm";
import GameResult from "../GameResult/GameResult";

import styled from "styled-components";
import {
  BsPersonCircle,
  BsX,
  BsChevronDoubleDown,
  BsChevronDoubleUp,
} from "react-icons/bs";

export default function GameCard({ type, name, date, time, place, court, id, results }) {
  const deleteGame = useStore((state) => state.deleteGame);
  const [showMore, setShowMore] = useState(false);

  // show detailed card information
  function showMoreDetails() {
    setShowMore((previousDetails) => !previousDetails);
  }

  return (
    <Card>
      <CardType type={type}>{type}</CardType>
      <CardContainer>
        <PlayersAndResults>
          <PlayerIconContainer>
            <BsPersonCircle />
          </PlayerIconContainer>
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
          <DeleteButton handleClick={deleteGame} id={id}>
            <BsX />
          </DeleteButton>
        </DeleteButtonContainer>
        <CardList>
          <DateHeadline> Date:</DateHeadline>
          <StyledContent> {date}</StyledContent>

          <TimeHeadline>Time:</TimeHeadline>
          <StyledContent>{time} </StyledContent>

          <PlaceHeadline>Place:</PlaceHeadline>
          <StyledContent> {place} </StyledContent>

          <CourtHeadline>Court:</CourtHeadline>
          <StyledContent> {court} </StyledContent>
        </CardList>
        {showMore === true ? (
          <CardDetails showMoreDetails={showMoreDetails} id={id} results={results} />
        ) : (
          ""
        )}
        <EditButtonContainer>
          <EditButton handleClick={showMoreDetails}>
            {showMore === true ? <BsChevronDoubleUp /> : <BsChevronDoubleDown />}
          </EditButton>
        </EditButtonContainer>
      </CardContainer>
    </Card>
  );
}

const Card = styled.section`
  position: relative;
  margin: 0 0;
`;

const CardType = styled.h2`
  position: absolute;
  top: 0.4em;
  left: 0.9em;
  padding: 0.2em 0.4em;
  z-index: 200;
  color: var(--text-secondary);
  background: ${({ type }) => (type === "Match" ? "#165D29" : "#6A1F1F ")};
`;

const CardContainer = styled.section`
  padding: 1em 1em 0 1em;
  margin: 2em 1em;
  mix-blend-mode: normal;
  position: relative;
  box-shadow: 4px 4px 4px 1px hsl(241deg 13% 40%);
  background: var(--background-secondary);
`;

const PlayersAndResults = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  margin: 2em 0 0.8em 0;
  gap: 1em;
  font-size: 1.3em;
`;

const PlayerIconContainer = styled.div`
  display: flex;
  font-size: 2em;
  align-items: center;
  border-radius: 50%;
  background-color: #ffffff;
`;
const PlayerNameContainer = styled.div`
  mix-blend-mode: normal;
  padding: 0.2em 0.5em;
  font-size: 0.7em;
  width: 30%;
`;

const ResultContainer = styled.div`
  mix-blend-mode: normal;
  padding: 0.2em 0.5em;
  display: flex;
  align-items: center;
  width: 60%;
  font-size: 0.7em;
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
  margin-top: 0.5em;
`;

const CardList = styled.article`
  display: grid;
  grid-template-areas: "date" "time" "place" "court";
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-flow: column;
  padding: 0 1em;
  gap: 0;
  box-shadow: 2px 1px 2px 1px var(--background-tertiary);
  border-radius: 10px;
`;

const DateHeadline = styled.p`
  grid-area: date;
  margin: 0.2em 0;
`;
const TimeHeadline = styled.p`
  grid-area: time;
  margin: 0.2em 0;
`;
const PlaceHeadline = styled.p`
  grid-area: place;
  margin: 0.2em 0;
`;
const CourtHeadline = styled.p`
  grid-area: court;
  margin: 0.2em 0;
`;

const StyledContent = styled.p`
  margin: 0.2em 0;
`;
