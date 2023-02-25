import PageTitle from "../../Components/PageTitle/PageTitle";
import Card from "../../Components/UI/Card/Card";
import Heading3 from "../../Components/UI/Heading/Heading3";
import Heading4 from "../../Components/UI/Heading/Heading4";
import Paragraph from "../../Components/UI/Paragraph/Paragraph";

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
        </Card>
      </Card>
    </div>
  );
};

export default Crew;
