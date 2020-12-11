import React from "react";
import rule from "../images/image-rules.svg";
import close from "../images/icon-close.svg";
import "../Style/Rules.css";

export default function Rules({ setRulesFunction }) {
  return (
    <div className="rules">
      <section className="rules__info">
        <h1>RULES</h1>
        <img
          className="close"
          src={close}
          onClick={(e) => setRulesFunction(false)}
        />
      </section>
      <img className="rules__image" src={rule} />
    </div>
  );
}
