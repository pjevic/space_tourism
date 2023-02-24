import React from "react";

import style from "./DataTile.module.scss";

function DataTile({ dataTitle, data }) {
  return (
    <div className={style.dataTile}>
      <div className={style.dataTitle}>{dataTitle}</div>
      <div className={style.data}>{data}</div>
    </div>
  );
}

export default DataTile;
