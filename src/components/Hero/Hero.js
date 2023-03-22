import classes from "./Hero.module.css";
import { useSelector } from "react-redux";

const Hero = () => {
  const lang = useSelector((state) => state.language.activeLanguage);
  const heroP = { en: "Resume", ru: "Резюме", arm: "Ռեզյումե" };

  return (
    <div className={classes["hero"]}>
      <div className={classes["hero--container"]}>
        <p>Hi, my name is</p>
        <h1>Robert Beglaryan.</h1>
        <h2>I am a passionate frontend developer.</h2>
        <h3>
          I have experience in designing, building, and deploying real-world
          websites. I create engaging, responsive, and user-friendly interfaces.
          I am open for freelance opportunities.
        </h3>
        <a
          href="mailto:robbegarm@gmail.com?subject=Mail From Portfolio Website"
          className={`${classes["cta--link"]} link`}
        >
          Interested? Contact Me!
        </a>
      </div>
    </div>
  );
};

export default Hero;
