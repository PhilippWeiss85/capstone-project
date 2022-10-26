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
          <PlayerContainer>
            <BsPersonCircle /> {name}
          </PlayerContainer>

          {results.gameresult === undefined ? "" : <GameResult results={results} />}
        </PlayersAndResults>

        <DeleteButtonContainer>
          <DeleteButton handleClick={deleteGame} id={id}>
            <BsX />
          </DeleteButton>
        </DeleteButtonContainer>
        <CardList>
          <li>
            <p>Date:</p>
            <p>{date}</p>
          </li>
          <li>
            <p>Time:</p>
            <p>{time}</p>
          </li>
          <li>
            <p>Place:</p>
            <p>{place}</p>
          </li>
          <li>
            <p>Court:</p>
            <p>{court}</p>
          </li>
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
  top: -1.2em;
  left: 0.3em;
  padding: 0.2em;
  font-size: 1.8em;
  color: #ffffff;
  background: ${({ type }) => (type === "Match" ? "#2ea357" : "#d74123")};
`;

const CardContainer = styled.section`
  padding: 1em 1em 0 1em;
  margin: auto 1em;
  mix-blend-mode: normal;
  position: relative;
  box-shadow: 4px 4px 4px 4px var(--box-shadow);
`;

const PlayersAndResults = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  margin: 1.5em 0 3em 0;
  gap: 1.5em;
  word-break: break-all;
`;

const PlayerContainer = styled.div`
  box-shadow: 2px 2px 2px 2px var(--box-shadow);
  mix-blend-mode: normal;
  padding: 0.2em 0.5em;
  display: flex;
  align-items: center;
  gap: 1.5em;
`;

const DeleteButtonContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;

const EditButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const CardList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  mix-blend-mode: normal;
  padding: 1em 1em;
  box-shadow: 2px 1px 2px 1px hsla(241, 91%, 13%, 0.2);
  border-radius: 10px;
`;
