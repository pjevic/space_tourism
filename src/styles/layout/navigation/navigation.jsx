import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import Logo from "../../../components/logo/logo";

import style from "./navigation.module.scss";

const Navigation = () => {
  return (
    <Fragment>
      <nav className={style.navigation}>
        <Link className={style["navigation__logo-box"]} to="/">
          <Logo />
        </Link>

        <ul className={style.navigation__links}>
          <li>
            <Link className={style.navigation__link} to="/">
              <strong>00</strong> Home
            </Link>
          </li>

          <li>
            <Link className={style.navigation__link} to="/destination">
              <strong>01</strong> Destination
            </Link>
          </li>

          <li>
            <Link className={style.navigation__link} to="/crew">
              <strong>02</strong> Crew
            </Link>
          </li>

          <li>
            <Link className={style.navigation__link} to="/technology">
              <strong>03</strong> Technology
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
