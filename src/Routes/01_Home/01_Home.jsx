import LandingPageMainButton from "../../Components/LandingPageMainButton/LandingPageMainButton";

import style from "./02_Home.module.scss";
import "../../SCSS/base/_typography.scss";

const Home = () => {
  const heading__5 = `so, you want to travel to`;
  const heading__1 = `space`;
  const paragraph = `Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!`;
  const button = `explore`;

  return (
    <div className={style.home}>
      <div className="card">
        <div className="heading heading__5">{heading__5}</div>
        <div className="heading heading__1">{heading__1}</div>
        <div className="text">{paragraph}</div>
      </div>

      <LandingPageMainButton innerText={button} />
    </div>
  );
};

export default Home;
