import React, { useState, useEffect } from "react";
import {
  setUserChoiceStateImage,
  getComputerChoice,
} from "../Shared/SharedFunction";
import { connect } from "react-redux";
import Chip from "../Shared/Chip";
import "../Style/Chip.css";

export function Computer({ computerChoice, showResult }) {
  let className = "computer";
  let classNameForDashboard = "result-dashboard computer";
  const [choice, setChoice] = useState(null);

  useEffect(() => {
    let state = null;
    setTimeout(() => {
      state = getComputerChoice();
      setChoice(state);
      computerChoice(state);
    }, 1000);// eslint-disable-next-line 
  }, []);

  return (
    <div className={showResult ? `${classNameForDashboard}` : `${className} `}>
      <h1 className="mobile">THE HOUSE PICKED</h1>
      {choice ? (
        <Chip className={choice} srcImage={setUserChoiceStateImage(choice)} />
      ) : (
        <div className="null"></div>
      )}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    computerChoice: (choice) =>
      dispatch({ type: "COMPUTER_CHOICE", payload: { choice } }),
  };
};

const mapStateToProps = (state) => {
  return {
    showResult: state.showResult,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Computer);
