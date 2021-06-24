import React from "react";
import "./style.scss";

export default function Heading({ firstword, secondword }) {
  return (
    <div>
      <h1>
        <span>{firstword}</span>
        <span>{secondword}</span>
      </h1>
    </div>
  );
}
