import { render, fireEvent } from "../../test-utils";
import Triangle from "../Triangle";

describe("Triangle", () => {
  it("It render the right number of chip", () => {
    const { container } = render(<Triangle />);
    expect(container.getElementsByClassName("circle")).toHaveLength(3);
  });

  it("render each chip with different class name", () => {
    const { container } = render(<Triangle />);
    expect(container.getElementsByClassName("circle--paper")).toHaveLength(1);
    expect(container.getElementsByClassName("circle--rock")).toHaveLength(1);
    expect(container.getElementsByClassName("circle--scissors")).toHaveLength(
      1
    );
  });
});
