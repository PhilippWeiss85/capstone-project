import Button from "../../components/Button";
import GameCard from "../../components/GameCard/GameCard";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function GameList({ gameList, deleteCard, updateCardDetail }) {
  const router = useRouter();

  function switchToForm() {
    router.push("/form");
  }

  return (
    <>
      <main>
        {gameList.map((game) => {
          return (
            <GameCard
              key={game.id}
              id={game.id}
              type={game.type}
              name={game.name}
              date={game.date}
              time={game.time}
              place={game.place}
              court={game.court}
              deleteCard={deleteCard}
              updateCardDetail={updateCardDetail}
              gameList={gameList}
            />
          );
        })}
        <ButtonContainer>
          <Button handleClick={switchToForm}>Add new card</Button>
        </ButtonContainer>
      </main>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
