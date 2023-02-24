import React from "react";
import { Link as ReactLink } from "react-router-dom";

import styles from "./Link.module.scss";

function Link({ to, strong, name, className }) {
  return (
    <li className={styles[className]}>
      <ReactLink to={to}>
        <strong>{strong} </strong>
        {name}
      </ReactLink>
    </li>
  );
}

export default Link;
