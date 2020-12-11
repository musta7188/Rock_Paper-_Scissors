import React, { useState, useEffect } from "react";
// import Gamer from "./Gamer";
import Computer from "./Computer";
// import WinOrLose from "./WinOrLose";
import "../Style/StartMatch.css";
import { connect } from "react-redux";
// import CircleAnimation from "../Animation/circleAnimation";
function Index({ computerChoice }) {
  const [userPick, setComputerPick] = useState(false);
  const [result, getResult] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setComputerPick(computerChoice);
    }, 1000);
  });

  return (
    <div className="start--game">

      <Computer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    computerChoice: state.computerChoice,
  };
};

export default connect(mapStateToProps, null)(Index);
