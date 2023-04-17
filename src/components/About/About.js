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
    est: "Minust",
  };
  const aboutText1 = {
    en: "I am a passionate web developer based in Tallinn, Estonia with experience in designing, building, and deploying modern websites. I specialize in using React JS, JavaScript (ES6), HTML5, and CSS3 to create engaging and responsive websites.",
    ru: "Я веб разработчик с опытом проектирования, создания и развертывания современный веб-сайтов. Я специализируюсь в использовании React JS, JavaScript (ES6), HTML5 и CSS3 для создания привлекательных и отзывчивых веб-сайтов.",
    arm: "Ես վեբ ծրագրավորող եմ, և ունեմ ժամանակակից կայքերի նախագծման, կառուցման և տեղադրման փորձ: Ես մասնագիտացած եմ React JS-ի, JavaScript-ի (ES6), HTML5-ի և CSS3-ի օգտագործման մեջ՝ գրավիչ և responsive կայքեր ստեղծելու նպատակով:",
    est: "Olen kaasaegsete veebisaitide kujundamise, loomise ning avaldamise kogemusega veebiarendaja. Olen spetsialiseerunud reageerivate, huvitavate ja kasutajasõbralike veebisaitide loomisele, kasutades React JS, JavaScript (ES6), HTML5, ja CSS3.",
  };
  const aboutText2 = {
    en: "I enjoy creating user-friendly interfaces that provide a seamless user experience and hava a passion for staying up-to-date with the latest web development trends and technologies. I take pride in my work and am committed to delivering high-quality websites that exceed my clients' expectations.",
    ru: "Мне нравится создавать удобные интерфейсы, обеспечивающие беспрепятственный пользовательский опыт, и я всегда стремлюсь быть в курсе последних трендов и технологий веб-разработки. Я горжусь своей работой и стремлюсь создавать высококачественные веб-сайты, превосходящие ожидания моих клиентов.",
    arm: "Ես հաճույք եմ ստանում օգտատերերի համար հարմար ինտերֆեյսներ ստեղծելուց, և մշտապես հետևում եմ վեբ ծրագրավորման արդի թրենդներին և նոր տեխնոլոգիական լուծումներին։Ես լրջորեն եմ մոտենում իմ աշխատանքին և երաշխավորում եմ տրամադրել բարձրորակ կայքեր, որոնք գերազանցում են իմ հաճախորդների սպասելիքները:",
    est: "Mulle meeldib luua kasutajasõbralikke liideseid, mis pakuvad sujuvat kasutajakogemust ning hoian ennast pidevalt kursis uusimate veebiarenduse trendide ja tehnoloogiategasuundade ja tehnoloogiate kursis hoidmise osas. Teen oma tööd südamega ning olen pühendunud kvaliteetsete veebilehtide loomisele, mis ületavad minu klientide ootusi.",
  };
  const educationHeadline = {
    en: "Education",
    ru: "Образование",
    arm: "Կրթություն",
    est: "Hariduskäik",
  };
  /*DEGREE 1*/
  const degree1Name = {
    en: "Master's Degree",
    ru: "Магистр",
    arm: "Մագիստրոս",
    est: "Magister",
  };
  const degree1UniFullName = {
    en: "Tallinn University of Technology",
    ru: "Таллиннский технологический университет",
    arm: "Տալլինի տեխնոլոգիական համալսարան",
    est: "Tallinna Tehnikaülikool",
  };
  const degree1Location = {
    en: "Estonia",
    ru: "Эстония",
    arm: "Էստոնիա",
    est: "Eesti",
  };
  const degree1Description = {
    en: "Master of Science in Engineering",
    ru: "Магистр инженер",
    arm: "Ինժեներական մագիստրոս",
    est: "Magistrikraad insneriteadustes",
  };
  /*DEGREE 2*/
  const degree2Name = {
    en: "Bachelor's Degree",
    ru: "Бакалавр",
    arm: "Բակալավր",
    est: "Bakalaureus",
  };
  const degree2UniFullName = {
    en: "Yerevan State University",
    ru: "Ереванский государственный университет",
    arm: "Երևանի պետական համալսարան",
    est: "Jerevani Riiklik Ülikool",
  };
  const degree2Location = {
    en: "Armenia",
    ru: "Армения",
    arm: "Հայաստան",
    est: "Armeenia",
  };
  const degree2Description = {
    en: "Bachelor of Science in Physics",
    ru: "Бакалавр физики",
    arm: "ֆիզիկայի բակալավր",
    est: "Bakalaureusekraad füüsikas",
  };

  return (
    <section className={`main-section ${classes["about"]}`} id="about">
      <h2 className="headline">{aboutHeadline[lang]}</h2>
      <div className={classes["about--container"]}>
        <div className={classes["about--description-box"]}>
          <article className={classes["about--text-box"]}>
            <p>{aboutText1[lang]}</p>
            <p>{aboutText2[lang]}</p>
          </article>
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
    </section>
  );
};

export default About;
