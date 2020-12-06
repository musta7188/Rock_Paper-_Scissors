import React, { useState, useEffect } from "react";
import ScoreTable from "./ScoreTable";
// import Triangle from "./Triangle";
import { connect } from "react-redux";
// import RulesButton from "./RulesButton";
// import StartMatch from "../StartMatch";
import "../Style/GameStyle.css";

export function Game({ userChoice, user, logOut }) {
  const [rulesState, setRuleState] = useState(false);

  const logOutGame = () => {
    logOut();
    localStorage.clear();
  };
  return (
    <div className="game_dashboard">
      <h1 className="user--name">Welcome {user}</h1>
      <button className="log-out" onClick={logOutGame}>
        Log out
      </button>
      <ScoreTable />
      {/* {userChoice ? <StartMatch /> : <Triangle />} */}
      {/* <RulesButton state={rulesState} setRulesFunction={setRuleState} /> */}
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => dispatch({ type: "LOG__OUT" }),
  };
};

const mapStateToProps = (state) => {
  return {
    userChoice: state.userChoice,
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);
