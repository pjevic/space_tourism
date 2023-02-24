import { Link } from "react-router-dom";

import PageTitle from "../../Components/PageTitle/PageTitle";
import Paragraph from "../../Components/UI/Paragraph/Paragraph";

import webpMoon from "../../Assets/Images/02_Destination/image-moon.webp";
import webpMars from "../../Assets/Images/02_Destination/image-mars.webp";
import webpEuropa from "../../Assets/Images/02_Destination/image-europa.webp";
import webpTitan from "../../Assets/Images/02_Destination/image-titan.webp";

import style from "./Destination.module.scss";

const Destination = () => {
  const paragraph = `The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.`;

  return (
    <div className={style.destination}>
      <div className="left">
        <PageTitle number="01" title="pick your destination" />

        <img src={webpMoon} alt="Moon" />
      </div>
      <div className="right">
        <nav className={style.nav}>
          <ul className={style.list}>
            <li className={style.listItem}>
              <Link>moon</Link>
            </li>
            <li className={style.listItem}>
              <Link>mars</Link>
            </li>
            <li className={style.listItem}>
              <Link>europa</Link>
            </li>
            <li className={style.listItem}>
              <Link>titan</Link>
            </li>
          </ul>
        </nav>
        <div className="title">moon</div>
        <Paragraph innerText={paragraph} />
      </div>
    </div>
  );
};

export default Destination;
