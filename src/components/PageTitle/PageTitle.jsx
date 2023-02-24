import React from "react";

import style from "./PageTitle.module.scss";

function PageTitle({ number, title }) {
  return (
    <div className={style.pageTitle}>
      <div className={style.pageTitle__number}>{number}</div>
      <div className={style.pageTitle__title}>{title}</div>
    </div>
  );
}

export default PageTitle;
