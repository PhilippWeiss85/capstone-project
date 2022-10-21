import styled from "styled-components";
import { BsPersonCircle, BsX, BsThreeDots } from "react-icons/bs";
import DeleteButton from "../DeleteButton";
import EditButton from "../EditButton";
import CardDetails from "../CardDetail/CardDetail";
import { useState } from "react";

export default function GameCard({
  type,
  name,
  date,
  time,
  place,
  court,
  deleteCard,
  id,
}) {
  const [showMore, setShowMore] = useState(false);

  function showMoreDetails() {
    setShowMore((previousDetails) => !previousDetails);
  }

  return (
    <Card>
      <CardType type={type}>{type}</CardType>
      <CardContainer>
        <PlayerDiv>
          <p>
            <BsPersonCircle /> {name}
          </p>
        </PlayerDiv>
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
        {showMore === true ? <CardDetails /> : ""}
        <EditButtonContainer onClick={() => showMoreDetails()}>
          <EditButton>
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
  font-size: 20px;
  color: #ffffff;
  background: ${({ type }) => (type === "Match" ? "#2ea357" : "#d74123")};
`;

const CardContainer = styled.section`
  padding: 1em 1em 0 1em;
  margin: 1em 1em;
  mix-blend-mode: normal;
  box-shadow: 4px 4px 4px 4px var(--box-shadow);
`;

const PlayerDiv = styled.article`
  position: relative;
  display: flex;
  justify-content: flex-start;
  box-shadow: 2px 2px 2px 2px var(--box-shadow);
  mix-blend-mode: normal;
  max-width: 30%;
  padding: 0.2em 0.5em;
  margin-bottom: 1em;
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
