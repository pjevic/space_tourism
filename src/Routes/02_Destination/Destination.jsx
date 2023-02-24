import { Link as ReactLink } from "react-router-dom";

import PageTitle from "../../Components/PageTitle/PageTitle";
import Link from "../../Components/UI/Link/Link";
import Links from "../../Components/UI/Links/Links";
import Heading2 from "../../Components/UI/Heading/Heading2";
import Paragraph from "../../Components/UI/Paragraph/Paragraph";
import Divider from "../../Components/UI/Divider/Divider";
import Card from "../../Components/UI/Card/Card";

import webpMoon from "../../Assets/Images/02_Destination/image-moon.webp";
import webpMars from "../../Assets/Images/02_Destination/image-mars.webp";
import webpEuropa from "../../Assets/Images/02_Destination/image-europa.webp";
import webpTitan from "../../Assets/Images/02_Destination/image-titan.webp";

import style from "./Destination.module.scss";

const Destination = () => {
  const heading2 = `moon`;
  const paragraph = `See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.`;

  return (
    <div className={style.destination}>
      <div className="left">
        <PageTitle number="01" title="pick your destination" />
        <img src={webpMoon} alt="Moon" />
      </div>

      <div className="right">
        <nav className={style.nav}>
          <ul className={style.list}>
            <Link className="link--sub" name="moon" />
            <Link className="link--sub" name="mars" />
            <Link className="link--sub" name="europa" />
            <Link className="link--sub" name="titan" />
          </ul>
        </nav>

        <Heading2 innerText={heading2} />
        <Paragraph innerText={paragraph} />
        <Divider marginT="5.4" marginB="2.8" />
        <Card className="card"></Card>
      </div>
    </div>
  );
};

export default Destination;
