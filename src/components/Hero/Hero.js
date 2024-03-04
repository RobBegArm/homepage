import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classes from "./Hero.module.css";

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
    en: "I am a frontend developer.",
    ru: "Я frontend разработчик.",
    arm: "Ես frontend ծրագրավորող եմ:",
    est: "Olen frontend arendaja.",
  };
  const heroP3 = {
    en: "Passionate Frontend Developer with a strong proficiency in Typescript, Javascript, and React JS, coupled with extensive hands-on experience within the iGaming industry. Known for a dedicated approach to creating exceptional user interfaces and engaging user experiences. In addition to my expertise in game development, I possess versatile skills in designing, building, and deploying websites.",
    ru: "Frontend разработчик, специализирующийся на Typescript, Javascript и React JS, в сочетании с обширным практическим опытом работы в индустрии iGaming. Помимо опыта в разработке игр, я обладаю навыками в дизайне, создании и развертывании веб-сайтов.",
    arm: "Frontend ծրագրավորող, որը մասնագիտացած է Typescript, Javascript և React JS-ում, որը զուգորդվում է iGaming ոլորտում մեծ գործնական փորձի հետ: Բացի խաղերի մշակման փորձից, ես հմտություններ ունեմ վեբ կայքի ձևավորման, ստեղծման և տեղակայման մեջ:",
    est: "Entusiastlik Frontend arendaja, kes valdab hästi Typescript'i, Javascript'i ja React JS'i ning omab ulatuslikku praktilist kogemust iGamingi tööstuses. Lisaks minu kogemustele mängude arendamisel on mul mitmekülgsed oskused veebisaitide kujundamisel, ehitamisel ja kasutuselevõtmisel.",
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
