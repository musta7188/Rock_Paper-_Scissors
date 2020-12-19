import React from "react";
import "./circleAnimation.css";
export default function circleAnimation({ result }) {
  return (
    <div className={result}>
      <div className={"circle--level3"}></div>
      <div className={"circle--level2"}></div>
      <div className="circle--level1"></div>
    </div>
  );
}
