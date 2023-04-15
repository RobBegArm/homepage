import classes from "./Hero.module.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import { FaChevronDown } from "react-icons/fa";

import { SmoothScrollTo } from "../../hooks/CustomHooks";

const Hero = () => {
  const lang = useSelector((state) => state.language.activeLanguage);

  const [hintIsVisible, setHintIsVisible] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
    /* eslint-disable */
  }, []);

  const listenToScroll = () => {
    let heightToHideFrom = 60;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHideFrom) {
      hintIsVisible && setHintIsVisible(false);
    } else {
      setHintIsVisible(true);
    }
  };

  const heroP1 = {
    en: "Hi, my name is",
    ru: "Здравствуйте, меня зовут",
    arm: "Բարև Ձեզ, իմ անունն է",
  };
  const heroH1 = {
    en: "Robert Beglaryan.",
    ru: "Роберт Бегларян.",
    arm: "Ռոբերտ Բեգլարյան.",
  };
  const heroP2 = {
    en: "I am a passionate web developer.",
    ru: "Я веб разработчик.",
    arm: "Ես վեբ ծրագրավորող եմ:",
  };
  const heroP3 = {
    en: "I have experience in designing, building, and deploying websites. I create engaging, responsive, and user-friendly interfaces. I am open for freelance opportunities.",
    ru: "У меня есть опыт проектирования, создания и развертывания веб-сайтов. Я создаю привлекательные, отзывчивые и удобные интерфейсы. Я открыт для фриланса.",
    arm: "Ես վեբ կայքերի դիզայնի, կառուցման և տեղադրման փորձ ունեմ: Ես ստեղծում եմ գրավիչ, responsive և օգտատերի համար հարմար ինտերֆեյսներ: Ես բաց եմ ֆրիլանսի առաջարկների համար:",
  };
  const heroCta = {
    en: "Interested? Contact Me!",
    ru: "Заинтересованы? Свяжитесь со мной!",
    arm: "Հետաքրքրվա՞ծ էք: Կապվեք ինձ հետ:",
  };

  return (
    <section className={classes["hero"]}>
      <div className={classes["hero--bg"]}></div>
      <div className={classes["hero--container"]}>
        <p className={classes["hero--p1"]}>{heroP1[lang]}</p>
        <h1>{heroH1[lang]}</h1>
        <p className={classes["hero--p2"]}>{heroP2[lang]}</p>
        <p className={classes["hero--p3"]}>{heroP3[lang]}</p>
        <a
          href="#contact"
          className={`${classes["cta--link"]} link`}
          onClick={(e) => SmoothScrollTo(e, "#contact")}
        >
          {heroCta[lang]}
        </a>
      </div>
      {hintIsVisible && (
        <div className={classes["hint-box"]}>
          <FaChevronDown
            className={`${classes["chevron"]} ${classes["pulse"]}`}
          />
          <FaChevronDown
            className={`${classes["chevron"]} ${classes["pulse"]}`}
          />
          <FaChevronDown
            className={`${classes["chevron"]} ${classes["pulse"]}`}
          />
        </div>
      )}
    </section>
  );
};

export default Hero;
