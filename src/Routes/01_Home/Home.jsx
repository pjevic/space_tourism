import Card from "../../Components/UI/Card/Card";
import Heading1 from "../../Components/UI/Heading/Heading1";
import Heading5 from "../../Components/UI/Heading/Heading5";
import Paragraph from "../../Components/UI/Paragraph/Paragraph";
import LandingPageMainButton from "../../Components/LandingPageMainButton/LandingPageMainButton";

import style from "./Home.module.scss";
import "../../SCSS/main.scss";

const Home = () => {
  const heading__5 = `so, you want to travel to`;
  const heading__1 = `space`;
  const paragraph = `Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!`;
  const button = `explore`;

  return (
    <div className={style.home}>
      <Card>
        <Heading5 className="heading heading__5" innerText={heading__5} />
        <Heading1 className="heading heading__1" innerText={heading__1} />
        <Paragraph className="paragraph" innerText={paragraph} />
      </Card>
      <LandingPageMainButton innerText={button} />
    </div>
  );
};

export default Home;
