import classes from "./Hero.module.css";
import { useSelector } from "react-redux";

const Hero = () => {
  const lang = useSelector((state) => state.language.activeLanguage);
  const heroP1 = {
    en: "Hi, my name is",
    ru: "Привет, меня зовут",
    arm: "Բարև, իմ անունն է",
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
    <div className={classes["hero"]}>
      <div className={classes["hero--bg"]}></div>
      <div className={classes["hero--container"]}>
        <p className={classes["hero--p1"]}>{heroP1[lang]}</p>
        <h1>{heroH1[lang]}</h1>
        <p className={classes["hero--p2"]}>{heroP2[lang]}</p>
        <p className={classes["hero--p3"]}>{heroP3[lang]}</p>
        <a
          href="mailto:robbegarm@gmail.com?subject=Mail From Portfolio Website"
          className={`${classes["cta--link"]} link`}
        >
          {heroCta[lang]}
        </a>
      </div>
    </div>
  );
};

export default Hero;
