import styled from "styled-components";
import { BsPersonCircle, BsX, BsThreeDots } from "react-icons/bs";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import CardDetails from "../CardDetail/CardDetail";
import { useState } from "react";
import CardResult from "../CardResults/CardResult";

export default function GameCard({
  type,
  name,
  date,
  time,
  place,
  court,
  deleteCard,
  id,
  updateCardDetail,
  gameList,
  results,
}) {
  const [showMore, setShowMore] = useState(false);

  function showMoreDetails() {
    setShowMore((previousDetails) => !previousDetails);
  }

  console.log("test", results);

  return (
    <Card>
      <CardType type={type}>{type}</CardType>
      <CardContainer>
        <PlayersAndResults>
          <PlayerContainer>
            <BsPersonCircle /> {name}
          </PlayerContainer>

          {results.gameresult === undefined || results.set === undefined ? (
            ""
          ) : (
            <CardResult results={results} />
          )}
        </PlayersAndResults>

        <DeleteButtonContainer>
          <DeleteButton handleClick={deleteCard} id={id}>
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
          <CardDetails
            showMoreDetails={showMoreDetails}
            updateCardDetail={updateCardDetail}
            id={id}
            gameList={gameList}
          />
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
  box-shadow: 4px 4px 4px 4px var(--box-shadow);
`;

const PlayersAndResults = styled.article`
  position: relative;
  display: flex;
  align-items: center;
  margin: 1.5em 0 3em 0;
  gap: 1.5em;
`;

const PlayerContainer = styled.div`
  box-shadow: 2px 2px 2px 2px var(--box-shadow);
  mix-blend-mode: normal;
  padding: 0.2em 0.5em;
  height: 2.5em;
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
