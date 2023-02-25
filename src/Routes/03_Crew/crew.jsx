import PageTitle from "../../Components/PageTitle/PageTitle";
import Card from "../../Components/UI/Card/Card";
import Heading3 from "../../Components/UI/Heading/Heading3";
import Heading4 from "../../Components/UI/Heading/Heading4";
import Paragraph from "../../Components/UI/Paragraph/Paragraph";
import Dot from "../../Components/Dot/Dot";

import webpPerson1 from "../../Assets/Images/03_Crew/image-douglas-hurley.webp";
import webpPerson2 from "../../Assets/Images/03_Crew/image-mark-shuttleworth.webp";
import webpPerson3 from "../../Assets/Images/03_Crew/image-victor-glover.webp";
import webpPerson4 from "../../Assets/Images/03_Crew/image-anousheh-ansari.webp";

import style from "./Crew.module.scss";

const Crew = () => {
  const title = `commander`;
  const name = `Douglas Hurley`;
  const paragraph = `Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.`;
  return (
    <div className={style.crew}>
      <Card className="horizontal">
        <Card>
          <PageTitle number="02" title="crew" />
          <Heading4 innerText={title} />
          <Heading3 innerText={name} />
          <Paragraph innerText={paragraph} />
          <ul className={style.dots}>
            <Dot className="active" />
            <Dot />
            <Dot />
            <Dot />
          </ul>
        </Card>
        <img src={webpPerson1} alt={name} />
      </Card>
    </div>
  );
};

export default Crew;
