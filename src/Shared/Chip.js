import React from "react";

export default function Chip({ className, srcImage, setUserChoice }) {
  return (
    <div
      className={"circle circle--" + className}
      onClick={(e) => setUserChoice?.(e.target.className)}
    >
      <img className={className} src={srcImage} />
    </div>
  );
}
