import classes from "./Hero.module.css";
import { useSelector } from "react-redux";

const Hero = () => {
  const lang = useSelector((state) => state.language.activeLanguage);
  const heroP = {
    en: "Hi, my name is",
    ru: "Привет, меня зовут",
    arm: "Բարև, իմ անունն է",
  };
  const heroH1 = {
    en: "Robert Beglaryan.",
    ru: "Роберт Бегларян.",
    arm: "Ռոբերտ Բեգլարյան.",
  };
  const heroH2 = {
    en: "I am a passionate frontend developer.",
    ru: "Я фронтенд-разработчик.",
    arm: "Ես frontend ծրագրավորող եմ:",
  };
  const heroH3 = {
    en: "I have experience in designing, building, and deploying real-world websites. I create engaging, responsive, and user-friendly interfaces. I am open for freelance opportunities.",
    ru: "У меня есть опыт проектирования, создания и развертывания реальных веб-сайтов. Я создаю привлекательные, отзывчивые и удобные интерфейсы. Я открыт для фриланса.",
    arm: "Ես վեբ կայքերի դիզայնի, կառուցման և տեղադրման փորձ ունեմ: Ես ստեղծում եմ գրավիչ, responsive և օգտատերի համար հարմար ինտերֆեյսներ: Ես բաց եմ ֆրիլանսի առաջարկների համար:",
  };
  const heroCta = {
    en: "Interested? Contact Me!",
    ru: "Заинтересованы? Свяжитесь со мной!",
    arm: "Հետաքրքրվա՞ծ էք: Կապվեք ինձ հետ:",
  };

  return (
    <div className={classes["hero"]}>
      <div className={classes["hero--container"]}>
        <p>{heroP[lang]}</p>
        <h1>{heroH1[lang]}</h1>
        <h2>{heroH2[lang]}</h2>
        <h3>{heroH3[lang]}</h3>
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
