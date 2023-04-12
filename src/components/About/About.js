import classes from "./About.module.css";
import { useSelector } from "react-redux";

const About = () => {
  const lang = useSelector((state) => state.language.activeLanguage);
  const aboutHeadline = {
    en: "About Me",
    ru: "Обо мне",
    arm: "Իմ մասին",
  };
  const aboutText1 = {
    en: "Hello! I am a passionate web developer based in Tallinn, Estonia with extensive experience in designing, building, and deploying real-world websites. I specialize in using React JS, JavaScript (ES6), HTML5, and CSS3 to create engaging and responsive websites.",
    ru: "Привет! Я веб разработчик, базирующийся в Таллинне, Эстонии, с большим опытом проектирования, создания и развертывания реальных веб-сайтов. Я специализируюсь на использовании React JS, JavaScript (ES6), HTML5 и CSS3 для создания привлекательных и отзывчивых веб-сайтов. ",
    arm: "Բարեւ Ձեզ! Ես վեբ ծրագրավորող եմ, որը հիմնված է Տալլինում, Էստոնիա, որն ունի իրական աշխարհի կայքերի նախագծման, կառուցման և տեղադրման մեծ փորձ: Ես մասնագիտացած եմ React JS-ի, JavaScript-ի (ES6), HTML5-ի և CSS3-ի օգտագործման մեջ՝ գրավիչ և արձագանքող կայքեր ստեղծելու համար:",
  };
  const aboutText2 = {
    en: "With a passion for staying up-to-date with the latest web development trends and technologies, I enjoy creating user-friendly interfaces that provide a seamless user experience. I take pride in my work and am committed to delivering high-quality websites that exceed my clients' expectations.",
    ru: "Стремясь быть в курсе последних тенденций и технологий веб-разработки, мне нравится создавать удобные интерфейсы, обеспечивающие беспрепятственный пользовательский опыт. Я горжусь своей работой и стремлюсь создавать высококачественные веб-сайты, превосходящие ожидания моих клиентов.",
    arm: "Ցանկանալով արդի մնալ վեբ զարգացման վերջին միտումներին և տեխնոլոգիաներին, ես հաճույք եմ ստանում ստեղծելու համար հարմար ինտերֆեյսներ, որոնք ապահովում են օգտատերերի անխափան փորձը: Ես հպարտ եմ իմ աշխատանքով և պարտավորվում եմ տրամադրել բարձրորակ կայքեր, որոնք գերազանցում են իմ հաճախորդների սպասելիքները:",
  };
  const educationHeadline = {
    en: "Education",
    ru: "Образование",
    arm: "Կրթություն",
  };
  const educationText = {
    en: "Drop Down Box, that can be open with details (list)",
    ru: "У меня есть образование.",
    arm: "Ես կրթություն ունեմ.",
  };

  return (
    <div className={classes["about"]} id="about">
      <h2 className="headline">{aboutHeadline[lang]}</h2>
      <div className={classes["about--container"]}>
        <div className={classes["about--description-box"]}>
          <div className={classes["about--text-box"]}>
            <p>{aboutText1[lang]}</p>
            <p>{aboutText2[lang]}</p>
          </div>
          <div className={classes["about--education-box"]}>
            <h3>{educationHeadline[lang]}</h3>
            <p>{educationText[lang]}</p>
          </div>
        </div>
        <div className={classes["about--image-box"]}>
          <img
            src={`${process.env.PUBLIC_URL}/images/about/about_image.jpg`}
            alt={`Robert Beglaryan`}
            className={classes["about-me-img"]}
            title={"Robert Beglaryan"}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
