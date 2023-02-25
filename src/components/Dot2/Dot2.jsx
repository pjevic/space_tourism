import React from "react";

import style from "./Dot2.module.scss";

const Dot = ({ number, className }) => {
  return <div className={`${style.dot} ${style[className]}`}>{number}</div>;
};

export default Dot;
