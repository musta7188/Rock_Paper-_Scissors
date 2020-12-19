import { render, fireEvent } from "../../test-utils";
import ScoreTable from "../ScoreTable";

describe("ScoreTable", () => {
  it("it render correctly", () => {
    const score = {
      score: 3,
    };
    const { container } = render(<ScoreTable score={score} />);
    expect(container.getElementsByClassName("score")).toHaveLength(1);
    expect(container.firstChild).toMatchSnapshot();
  });
});
