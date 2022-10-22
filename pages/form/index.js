import GameCardForm from "../../components/Form/GameCardForm";

export default function Form({ appendNewGameCard, gameList, deleteCard }) {
  return (
    <>
      <h1>Create a new card</h1>
      <main>
        <GameCardForm appendNewGameCard={appendNewGameCard} />
      </main>
    </>
  );
}
