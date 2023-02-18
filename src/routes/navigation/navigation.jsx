import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

import Logo from "../../components/logo/logo";

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
              Home
            </Link>
          </li>

          <li>
            <Link className={style.navigation__link} to="/destination">
              Destination
            </Link>
          </li>

          <li>
            <Link className={style.navigation__link} to="/crew">
              Crew
            </Link>
          </li>

          <li>
            <Link className={style.navigation__link} to="/technology">
              Technology
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
