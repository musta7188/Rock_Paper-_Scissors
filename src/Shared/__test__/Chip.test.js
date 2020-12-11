import { render, fireEvent } from "../../test-utils";
import Chip from "../Chip";

const setUserChoiceMock = jest.fn();

describe("Chip", () => {
  it("renders correctly", () => {
    const className = "rock";
    const imageSrc = "https://image_url";
    const { container } = render(
      <Chip
        className={className}
        setUserChoice={setUserChoiceMock}
        srcImage={imageSrc}
      />
    );
    expect(container.firstChild).toHaveClass(`circle circle--${className}`);
    expect(
      container.getElementsByTagName("img")[0].getAttribute("src")
    ).toEqual(imageSrc);
    expect(container.getElementsByTagName("img")[0]).toHaveClass(className);
  });

  it("It calls setUserChoice when the div is clicked", () => {
    const { container } = render(<Chip setUserChoice={setUserChoiceMock} />);
    fireEvent.click(container.firstChild);
    expect(setUserChoiceMock).toHaveBeenCalledTimes(1);
  });
});
