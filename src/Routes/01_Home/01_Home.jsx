import LandingPageMainButton from "../../Components/LandingPageMainButton/LandingPageMainButton";

import style from "./02_Home.module.scss";
// import "../../SCSS/base/_typography.scss";

const Home = () => {
  return (
    <div className={style.home}>
      <div className="card">
        <div className="heading heading__5">So, you want to travel to</div>
        <div className="heading heading__1">space</div>
        <div className="text">
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this world experience!
        </div>
      </div>

      <div className={style.circle}>EXPLORE</div>
    </div>
  );
};

export default Home;
