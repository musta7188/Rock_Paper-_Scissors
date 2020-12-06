import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";

///takes a user choice and return one of the image used to set the classes
export const setUserChoiceStateImage = (choice) => {
  let image = "";
  switch (choice) {
    case "paper":
      image = paper;
      break;
    case "rock":
      image = rock;
      break;
    case "scissors":
      image = scissors;
      break;
    default:
      image = "";
  }

  return image;
};

////generate random choice for the computer
export const getComputerChoice = () => {
  let computerChoice = ["paper", "rock", "scissors"];
  let random = Math.floor(Math.random() * computerChoice.length);
  return computerChoice[random];
};

///t
export const gameStart = (userPick, computerPick) => {
  if (userPick === computerPick) {
    return "DRAW";
  }
  if (userPick === "rock" && computerPick === "scissors") {
    return "WIN";
  }
  if (userPick === "scissors" && computerPick === "paper") {
    return "WIN";
  }
  if (userPick === "paper" && computerPick === "rock") {
    return "WIN";
  } else {
    return "LOSE";
  }
};
