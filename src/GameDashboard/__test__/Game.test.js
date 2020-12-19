import { render, fireEvent } from "../../test-utils";
import { Game } from "../";

const logOutMock = jest.fn();
const user = "xyz";

describe("Game", () => {
  it("renders StartMatch when the userChoice is true", () => {
    const { container } = render(
      <Game userChoice={true} logOut={logOutMock} user={user} />
    );
    expect(container.getElementsByClassName("start--game")).toHaveLength(1);
  });
  it("renders Triangle when the userChoice is false", () => {
    const { container } = render(
      <Game userChoice={false} logOut={logOutMock} user={user} />
    );
    expect(container.getElementsByClassName("triangle")).toHaveLength(1);
  });

  it("call the Logout function when clicked", () => {
    const { container } = render(
      <Game userChoice={true} logOut={logOutMock} user={user} />
    );
    fireEvent.click(container.getElementsByTagName("button")[0]);
    expect(logOutMock).toHaveBeenCalledTimes(1);
  });
});
