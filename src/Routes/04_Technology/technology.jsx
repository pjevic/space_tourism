import PageTitle from "../../Components/PageTitle/PageTitle";
import Card from "../../Components/UI/Card/Card";
import Dot from "../../Components/Dot2/Dot2";
import Subheading from "../../Components/UI/Subheading/Subheading-16";
import Heading3 from "../../Components/UI/Heading/Heading3";
import Paragraph from "../../Components/UI/Paragraph/Paragraph";

import imgTech1Port from "../../Assets/Images/04_Technology/image-launch-vehicle-portrait.jpg";
import imgTech1Land from "../../Assets/Images/04_Technology/image-launch-vehicle-landscape.jpg";
import imgTech2Port from "../../Assets/Images/04_Technology/image-spaceport-portrait.jpg";
import imgTech2Land from "../../Assets/Images/04_Technology/image-spaceport-landscape.jpg";
import imgTech3Port from "../../Assets/Images/04_Technology/image-space-capsule-portrait.jpg";
import imgTech3Land from "../../Assets/Images/04_Technology/image-space-capsule-landscape.jpg";

import style from "./Technology.module.scss";

const Technology = () => {
  const paragraph = `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`;

  return (
    <div className={style.technology}>
      <PageTitle number="03" title="space launch 101" />
      <Card className={"horizontal"}>
        <Card>
          <Dot number="1" className={"active"} />
          <Dot number="2" />
          <Dot number="3" />
        </Card>
        <Card>
          <Subheading innerText="THE TERMINOLOGY…" />
          <Heading3 innerText={"LAUNCH VEHICLE"} />
          <Paragraph innerText={paragraph} />
        </Card>
        <img className={style.image} src={imgTech1Port} />
      </Card>
    </div>
  );
};

export default Technology;
