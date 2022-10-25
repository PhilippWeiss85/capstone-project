import GameCardForm from "../../components/Form/GameCardForm";

export default function Form({ appendNewGameCard }) {
  return (
    <>
      <h1>Create a new card</h1>
      <main>
        <GameCardForm appendNewGameCard={appendNewGameCard} />
      </main>
    </>
  );
}
