import { Link } from "react-router-dom";

import logoImg from "../../../Assets/Images/Shared/logo.svg";

const Logo = ({ to }) => {
  return (
    <Link to={to}>
      <img src={logoImg} alt="Space Tourism Logo" />
    </Link>
  );
};

export default Logo;
