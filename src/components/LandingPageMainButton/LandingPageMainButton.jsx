import React from "react";

import style from "./LandingPageMainButton.module.scss";

function LandingPageMainButton({ innerText }) {
  return <div className={style.circle}>{innerText}</div>;
}

export default LandingPageMainButton;
