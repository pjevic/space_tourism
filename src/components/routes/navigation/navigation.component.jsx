import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <div>Logo</div>
        </Link>
        <div className="links-container ">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/destination">
            Destination
          </Link>
          <Link className="link" to="/crew">
            Crew
          </Link>
          <Link className="link" to="/technology">
            Technology
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
