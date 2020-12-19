import React from "react";

export default function Chip({ className, srcImage, setUserChoice, alt = ""}) {
  return (
    <div
      className={"circle circle--" + className}
      onClick={(e) => setUserChoice?.(e.target.className)}
    >
      <img className={className} src={srcImage} alt={alt} />
    </div>
  );
}
