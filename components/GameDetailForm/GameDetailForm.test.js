import { screen, render } from "@testing-library/react";
import { testingResults } from "../GameCard/GameCard.test";
import GameDetails from "./GameDetailForm";

describe("GameDetails", () => {
  it("should render all input fields", () => {
    render(<GameDetails id="1" showMoreDetails="true" results={testingResults} />);

    expect(screen.getAllByRole("radioinput")).toHaveLength(2);
    expect(screen.getAllByRole("numberinput")).toHaveLength(6);
    expect(screen.getAllByRole("numberinput")).toBeDefined();
    expect(screen.getAllByLabelText("won")).toHaveLength(1);
    expect(screen.getAllByLabelText("lost")).toHaveLength(1);
    expect(screen.getByText("Set 1")).toBeDefined();
    expect(screen.getByText("Set 2")).toBeDefined();
    expect(screen.getByText("Set 3")).toBeDefined();
  });

  it("result numbers should be a viable type", () => {
    render(<GameDetails id="3" showMoreDetails="true" results={testingResults} />);

    expect(screen.getAllByRole("numberinput")).toBeTruthy();
  });
});
