import React from "react";
import { setUserChoiceStateImage } from "../Shared/SharedFunction";
import { connect } from "react-redux";
import Chip from "../Shared/Chip";
import "../Style/GamerStyle.css";
function Gamer({ userChoice, showResult }) {
  let className = "user";
  let classNameForDashboard = "result-dashboard-user user";

  return (
    <div className={showResult ? `${classNameForDashboard}` : `${className}`}>
      <h1>YOU PICKED</h1>
      {/* chip */}
      <Chip
        className={userChoice}
        srcImage={setUserChoiceStateImage(userChoice)}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userChoice: state.userChoice,
    showResult: state.showResult,
  };
};

export default connect(mapStateToProps)(Gamer);
