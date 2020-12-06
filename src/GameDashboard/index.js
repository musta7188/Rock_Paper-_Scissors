import React, { useState, useEffect } from "react";
import { connect } from "react-redux";


export function Game({ userChoice, user, logOut }) {
  const [rulesState, setRuleState] = useState(false);

  const logOutGame = () => {
    logOut();
    localStorage.clear();
  };
  return (
    <div className="game_dashboard">
      Here where the piramids  and the chips goas
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
