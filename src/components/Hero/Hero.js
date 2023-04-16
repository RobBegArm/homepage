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
    est: "Tere, minu nimi on",
  };
  const heroH1 = {
    en: "Robert Beglaryan.",
    ru: "Роберт Бегларян.",
    arm: "Ռոբերտ Բեգլարյան.",
    est: "Robert Beglaryan.",
  };
  const heroP2 = {
    en: "I am a passionate web developer.",
    ru: "Я веб разработчик.",
    arm: "Ես վեբ ծրագրավորող եմ:",
    est: "Olen entusiastlik veebiarendaja.",
  };
  const heroP3 = {
    en: "I have experience in designing, building, and deploying websites. I create engaging, responsive, and user-friendly interfaces. I am open for freelance opportunities.",
    ru: "У меня есть опыт проектирования, создания и развертывания веб-сайтов. Я создаю привлекательные, отзывчивые и удобные интерфейсы. Я открыт для фриланса.",
    arm: "Ես ունեմ վեբ կայքերի դիզայնի, կառուցման և տեղադրման փորձ: Ես ստեղծում եմ գրավիչ, responsive և օգտատերի համար հարմար ինտերֆեյսներ: Բաց եմ ֆրիլանսի առաջարկների համար:",
    est: "Mul on kogemusi veebilehtede kujundamisel, ehitamisel, ja avaldamisel. Mulle meeldib luua reageeriv, huvitav  ja kasutajasõbralikke  liideseid.",
  };
  const heroCta = {
    en: (
      <p>
        Interested?
        <br />
        Contact me!
      </p>
    ),
    ru: (
      <p>
        Заинтересованы?
        <br />
        Свяжитесь со мной!
      </p>
    ),
    arm: (
      <p>
        Հետաքրքրվա՞ծ եք:
        <br />
        Կապվեք ինձ հետ:
      </p>
    ),
    est: (
      <p>
        Pakub huvi?
        <br />
        Võta ühendust!
      </p>
    ),
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
