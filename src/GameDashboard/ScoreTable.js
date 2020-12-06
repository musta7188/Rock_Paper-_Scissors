import React from "react";
import { connect } from "react-redux";
import "../Style/ScoreTable.css";

export function ScoreTable({ score }) {
  return (
    <div className="score_table">
      <section className="score_table__info">
        <div>ROCK</div>
        <div>PAPER</div>
        <div>SCISSORS</div>
      </section>
      <section className="score_table__score">
        <div>SCORE</div>
        <div className="score">{score}</div>
      </section>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    score: state.score,
  };
};

export default connect(mapStateToProps)(ScoreTable);
