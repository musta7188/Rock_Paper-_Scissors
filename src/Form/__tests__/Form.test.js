import { Form } from "../index";
import { render, fireEvent } from "@testing-library/react";

const startGameMock = jest.fn();

describe("Form", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("Renders correctly", () => {
    const { container } = render(<Form startGame={startGameMock} />);
    expect(container.firstChild).toHaveClass("form--container");
    expect(container.firstChild.getElementsByTagName("form")).toHaveLength(1);
    expect(container.firstChild.getElementsByTagName("input")).toHaveLength(2);
    expect(container.querySelectorAll("input[type=submit]")).toHaveLength(1);
  });

  it("calls the startGame prop when submitting the form", () => {
    const { container } = render(<Form startGame={startGameMock} />);
    fireEvent.submit(container.firstChild.getElementsByTagName("form")[0]);
    expect(startGameMock).toHaveBeenCalledTimes(1);
  });

  it("updates the state when the user enters a value in the input field", () => {
    const { container } = render(<Form startGame={startGameMock} />);
    const gamerName = "xyz";
    fireEvent.change(container.firstChild.getElementsByTagName("input")[0], {
      target: { value: gamerName },
    });
    fireEvent.submit(container.firstChild.getElementsByTagName("form")[0]);
    expect(startGameMock).toHaveBeenCalledWith(gamerName);
  });
});
