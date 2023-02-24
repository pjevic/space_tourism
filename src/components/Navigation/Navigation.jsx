import { Fragment } from "react";
import { Outlet, Link as ReactLink } from "react-router-dom";

import Logo from "../UI/Logo/Logo";
import Links from "../UI/Links/Links";
import Link from "../UI/Link/Link";

import style from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <Fragment>
      <nav className={style.navigation}>
        <Logo to="/" />

        <ul className={style.navigation__links}>
          <Link className="link" strong="00" name="home" to="/" />
          <Link className="link" strong="01" name="destination" to="/destination" />
          <Link className="link" strong="02" name="crew" to="/crew" />
          <Link className="link" strong="03" name="technology" to="/technology" />
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
