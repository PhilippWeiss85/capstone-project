import { screen, render } from "@testing-library/react";
import GameCard from "./GameCard";

export const testingResults = {
  gameresult: "won",
  set: [
    { Player1: 6, Player2: 1 },
    { Player1: 2, Player2: 6 },
    { Player1: 0, Player2: 20 },
  ],
};

describe("GameCard", () => {
  it("should render the card with all items", () => {
    render(
      <GameCard
        type="match"
        name="max"
        date="2022-04-12"
        time="20:00"
        place="Fideliopark"
        court="Gras"
        id="1"
        results={testingResults}
      />
    );

    expect(screen.getByText("Fideliopark")).toBeVisible();
    expect(screen.getAllByText("Gras")).toHaveLength(1);
  });
});
