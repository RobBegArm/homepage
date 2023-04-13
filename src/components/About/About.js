import classes from "./About.module.css";
import { useSelector } from "react-redux";

import DropdownTab from "../UI/DropdownTab/DropdownTab";
import Picture from "../UI/Picture/Picture";

const About = () => {
  const lang = useSelector((state) => state.language.activeLanguage);
  const aboutHeadline = {
    en: "About Me",
    ru: "Обо мне",
    arm: "Իմ մասին",
  };
  const aboutText1 = {
    en: "I am a passionate web developer based in Tallinn, Estonia with extensive experience in designing, building, and deploying modern websites. I specialize in using React JS, JavaScript (ES6), HTML5, and CSS3 to create engaging and responsive websites.",
    ru: "Я веб разработчик, базирующийся в Таллинне, Эстонии, с большим опытом проектирования, создания и развертывания современный веб-сайтов. Я специализируюсь на использовании React JS, JavaScript (ES6), HTML5 и CSS3 для создания привлекательных и отзывчивых веб-сайтов. ",
    arm: "Ես վեբ ծրագրավորող եմ, որը հիմնված է Տալլինում, Էստոնիա, որն ունի ժամանակակից կայքերի նախագծման, կառուցման և տեղադրման մեծ փորձ: Ես մասնագիտացած եմ React JS-ի, JavaScript-ի (ES6), HTML5-ի և CSS3-ի օգտագործման մեջ՝ գրավիչ և արձագանքող կայքեր ստեղծելու համար:",
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
  /*DEGREE 1*/
  const degree1Name = {
    en: "Master's Degree",
    ru: "Магистр",
    arm: "Մագիստրոս",
  };
  const degree1UniFullName = {
    en: "Tallinn University of Technology",
    ru: "Таллиннский технологический университет",
    arm: "Տալլինի տեխնոլոգիական համալսարան",
  };
  const degree1Location = {
    en: "Estonia",
    ru: "Эстония",
    arm: "Էստոնիա",
  };

  const degree1Description = {
    en: "Master of Science in Engineering",
    ru: "Магистр инженер",
    arm: "Ինժեներական մագիստրոս",
  };
  /*DEGREE 2*/
  const degree2Name = {
    en: "Bachelor's Degree",
    ru: "Бакалавр",
    arm: "Բակալավր",
  };
  const degree2UniFullName = {
    en: "Yerevan State University",
    ru: "Ереванский государственный университет",
    arm: "Երևանի պետական համալսարան",
  };
  const degree2Location = {
    en: "Armenia",
    ru: "Армения",
    arm: "Հայաստան",
  };
  const degree2Description = {
    en: "Bachelor of Science in Physics",
    ru: "Бакалавр физики",
    arm: "ֆիզիկայի բակալավր",
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
            <DropdownTab
              imgName="taltech_logo"
              imgFolder="about"
              imgAlt="TalTech - Tallinn University of Technology"
              mainHeadline="TalTech"
              mainDescription={degree1Name[lang]}
              dropdownHeadline={degree1UniFullName[lang]}
              dropdownLocation={degree1Location[lang]}
              dropdownYears="2018-2020"
              dropdownDescription={degree1Description[lang]}
            />
            <DropdownTab
              imgName="ysu_logo"
              imgFolder="about"
              imgAlt="YSU - Yerevan State University"
              mainHeadline="YSU"
              mainDescription={degree2Name[lang]}
              dropdownHeadline={degree2UniFullName[lang]}
              dropdownLocation={degree2Location[lang]}
              dropdownYears="2012-2016"
              dropdownDescription={degree2Description[lang]}
            />
          </div>
        </div>
        <div className={classes["about--image-box"]}>
          <Picture
            imgName="robert_img"
            imgFolder="about"
            imgAlt="Robert Beglaryan - Web Developer"
            imgClasses={classes["about-me-img"]}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
