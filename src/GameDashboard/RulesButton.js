import React from "react";
import Rules from "./Rules";
import "../Style/RulesButton.css";
export default function RulesButton({ state, setRulesFunction }) {
  // check if the state of is true or false and return the rules in case is true
  const returnStateButton = (state) =>
    state ? <Rules setRulesFunction={setRulesFunction} /> : "";

  return (
    <>
      {returnStateButton(state)}
      <div className="rules_button">
        {/* function is passed as props and flip the state from true to false  */}
        <button onClick={() => setRulesFunction(!state)}>RULES</button>
      </div>
    </>
  );
}
