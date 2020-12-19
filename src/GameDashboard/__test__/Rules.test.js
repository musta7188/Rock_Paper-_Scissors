import { render, fireEvent } from "../../test-utils";
import Rules from "../Rules";
import rule from "../../images/image-rules.svg";
import close from "../../images/icon-close.svg";

const setRulesFunctionMock = jest.fn();

describe("Rules", () => {
  it("render correctly the img with the right src attribute", () => {
    const { container } = render(
      <Rules setRulesFunction={setRulesFunctionMock} />
    );
    expect(container.firstChild).toHaveClass("rules");
    expect(
      container.getElementsByTagName("img")[0].getAttribute("src")
    ).toEqual(close);
    expect(
      container.getElementsByTagName("img")[1].getAttribute("src")
    ).toEqual(rule);
  });

  it("call the function that close the panel when clicked with value of false", () => {
    const { container } = render(
      <Rules setRulesFunction={setRulesFunctionMock} />
    );
    fireEvent.click(container.firstChild.getElementsByTagName("img")[0]);
    expect(setRulesFunctionMock).toHaveBeenCalledTimes(1);
    expect(setRulesFunctionMock).toHaveBeenCalledWith(false);
  });
});
