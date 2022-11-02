import { useState } from "react";
import useStore from "../../store/useStore";

import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import CardDetails from "../GameDetailForm/GameDetailForm";
import GameResult from "../GameResult/GameResult";

import styled from "styled-components";
import { BsPersonCircle, BsX, BsThreeDots } from "react-icons/bs";

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
              <GameResult results={results} />{" "}
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
          <p> {date}</p>

          <TimeHeadline>Time:</TimeHeadline>
          <p>{time} </p>

          <PlaceHeadline>Place:</PlaceHeadline>
          <p> {place} </p>

          <CourtHeadline>Court:</CourtHeadline>
          <p> {court} </p>
        </CardList>
        {showMore === true ? (
          <CardDetails showMoreDetails={showMoreDetails} id={id} results={results} />
        ) : (
          ""
        )}
        <EditButtonContainer>
          <EditButton handleClick={showMoreDetails}>
            <BsThreeDots />
          </EditButton>
        </EditButtonContainer>
      </CardContainer>
    </Card>
  );
}

const Card = styled.section`
  position: relative;
  margin: 3em 0;
`;

const CardType = styled.h2`
  position: absolute;
  top: 0.4em;
  left: 0.9em;
  padding: 0.2em 0.4em;
  z-index: 200;
  color: var(--text-secondary);
  background: ${({ type }) => (type === "Match" ? "#2ea357" : "#d74123")};
`;

const CardContainer = styled.section`
  padding: 1em 1em 0 1em;
  margin: auto 1em;
  mix-blend-mode: normal;
  position: relative;
  box-shadow: 4px 4px 4px var(--box-shadow);
  background: var(--background-secondary);
`;

const PlayersAndResults = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  margin: 1.3em 0 0.8em 0;
  gap: 1.5em;
  word-break: break-all;
  color: var(--text-primary);
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
  width: 45%;
`;

const ResultContainer = styled.div`
  box-shadow: 1px 1px 1px var(--background-tertiary);
  mix-blend-mode: normal;
  padding: 0.2em 0.5em;
  display: flex;
  align-items: center;
  gap: 1.5em;
  width: 45%;
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
`;

const CardList = styled.article`
  display: grid;
  grid-template-rows: auto;
  grid-template-areas: "date" "time" "place" "court";
  grid-auto-flow: column;
  gap: 0.5em;
  mix-blend-mode: normal;
  padding: 1em 1em;
  box-shadow: 2px 1px 2px 1px var(--background-tertiary);
  border-radius: 10px;
`;

const DateHeadline = styled.p`
  grid-area: date;
`;
const TimeHeadline = styled.p`
  grid-area: time;
`;
const PlaceHeadline = styled.p`
  grid-area: place;
`;
const CourtHeadline = styled.p`
  grid-area: court;
`;
