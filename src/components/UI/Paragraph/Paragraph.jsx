import React from "react";

function Paragraph({ className, innerText }) {
  return <p className={className}>{innerText}</p>;
}

export default Paragraph;
