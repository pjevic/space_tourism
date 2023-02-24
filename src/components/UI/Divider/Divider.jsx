import React from "react";

import style from "./Divider.module.scss";

function Divider({ marginT, marginB }) {
  return <div style={{ marginTop: `${marginT}rem`, marginBottom: `${marginB}rem` }} className={style.divider}></div>;
}

export default Divider;
