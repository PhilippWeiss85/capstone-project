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
        image="https://res.cloudinary.com/dks3vdmen/image/upload/v1668433418/court_ilufef.jpg"
      />
    );

    expect(screen.getByText("match")).toBeVisible();
    expect(screen.getByText("max")).toBeVisible();
    expect(screen.getAllByText("2022-04-12")).toHaveLength(1);
    expect(screen.getAllByText("20:00")).toHaveLength(1);
    expect(screen.getByText("Fideliopark")).toBeVisible();
    expect(screen.getAllByText("Gras")).toHaveLength(1);
    expect(screen.getByText("WON")).toBeTruthy();
    expect(screen.getByText("1")).toBeTruthy();
    expect(screen.getByText("2")).toBeTruthy();
    expect(screen.getAllByText("6")).toBeTruthy();
    expect(screen.getByText("0")).toBeTruthy();
    expect(screen.getByText("20")).toBeTruthy();
  });
});
