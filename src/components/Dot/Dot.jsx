import React from "react";

import style from "./Dot.module.scss";

const Dot = ({ className }) => {
  return <div className={`${style.dot} ${style[className]}`}></div>;
};

export default Dot;
