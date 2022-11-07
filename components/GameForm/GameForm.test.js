import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event/";
import AddGameForm from "./GameForm";

describe("AddGameForm", () => {
  it("should display all input fields", () => {
    render(<AddGameForm />);
    expect(screen.getAllByRole("radioinput")).toHaveLength(6);
    expect(screen.getAllByRole("input")).toHaveLength(4);
    expect(screen.getAllByRole("submitbutton")).toHaveLength(1);
  });

  it("should display the name input", async () => {
    render(<AddGameForm />);
    const input = screen.getByLabelText("Opponent");
    await userEvent.type(input, "Max");
    expect(input).toHaveValue("Max");
  });
});
