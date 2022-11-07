import { screen, render } from "@testing-library/react";
import GameCard from "./GameCard";

export const testingResults = {
  gameresult: "",
  set: [
    { Player1: "", Player2: "," },
    { Player1: "", Player2: "," },
    { Player1: "", Player2: "," },
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
