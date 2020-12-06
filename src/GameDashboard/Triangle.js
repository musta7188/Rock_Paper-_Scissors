import React from "react";
import TriangleImage from "../images/bg-triangle.svg";
import paper from "../images/icon-paper.svg";
import rock from "../images/icon-rock.svg";
import scissors from "../images/icon-scissors.svg";
import { connect } from "react-redux";
import Chip from "../Shared/Chip";
import "../Style/Chip.css";

function Triangle({ setUserChoice }) {
  return (
      <div className="triangle">
        <Chip
          className="paper"
          srcImage={paper}
          setUserChoice={setUserChoice}
        />
        <Chip
          className="rock"
          srcImage={rock}
          setUserChoice={setUserChoice}
        />
        <Chip
          className="scissors"
          srcImage={scissors}
          setUserChoice={setUserChoice}
        />
        <img className="triangle--image" src={TriangleImage} />
      </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserChoice: (choice) =>
      dispatch({ type: "SET_USER_CHOICE", payload: { choice } }),
  };
};

export default connect(null, mapDispatchToProps)(Triangle);
