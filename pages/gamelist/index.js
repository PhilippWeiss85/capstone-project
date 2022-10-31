import Button from "../../components/Button";
import styled from "styled-components";
import { useRouter } from "next/router";
import useStore from "../../store/useStore";
import dynamic from "next/dynamic";
import { getAllGameCards } from "../../services/gameCardServices";

export async function getServerSideProps() {
  const gameCards = await getAllGameCards();

  return {
    props: { gameCards: gameCards },
  };
}

export default function GameList({ gameCards }) {
  const gameList = useStore((state) => state.games);
  const router = useRouter();
  const DynamicGameCard = dynamic(() => import("../../components/GameCard/GameCard")); // to prevent rendering hydration error: https://nextjs.org/docs/advanced-features/dynamic-import

  return (
    <>
      <main>
        {gameCards.map((game) => {
          return (
            <DynamicGameCard
              key={game.id}
              id={game.id}
              type={game.type}
              name={game.name}
              date={game.date}
              time={game.time}
              place={game.place}
              court={game.court}
              results={game.results}
            />
          );
        })}
        {/* {gameList.map((game) => {
          return (
            <DynamicGameCard
              key={game.id}
              id={game.id}
              type={game.type}
              name={game.name}
              date={game.date}
              time={game.time}
              place={game.place}
              court={game.court}
              results={game.results}
            />
          );
        })} */}
        <ButtonContainer>
          <Button handleClick={() => router.push("/form")}>Add new card</Button>
        </ButtonContainer>
      </main>
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;
