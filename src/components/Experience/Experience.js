import classes from "./Experience.module.css";
import { useSelector } from "react-redux";

import DropdownTab from "../UI/DropdownTab/DropdownTab";
import Picture from "../UI/Picture/Picture";

const Experience = () => {
  const lang = useSelector((state) => state.language.activeLanguage);

  const experienceHeadline = {
    en: "Experience",
    ru: "Опыт",
    arm: "Փորձ",
  };

  const profExperienceHeadline = {
    en: "Professional Experience",
    ru: "Опыт Работы",
    arm: "Մասնագիտական Փորձ",
  };

  /*JOB 1*/

  const job1Duration = {
    en: "11.2022 - now",
    ru: "11.2022 - сейчас",
    arm: "11.2022 - առայժմ",
  };
  const job1Name = {
    en: "Fullstack Web Developer",
    ru: "Fullstack Веб-Разработчик",
    arm: "Fullstack Վեբ Ծրագրավորող",
  };
  const job1Location = {
    en: "Estonia",
    ru: "Эстония",
    arm: "Էստոնիա",
  };
  const job1skill1 = {
    en: <p>Website and UI design, SEO and deployment</p>,
    ru: <p>Дизайн веб-сайта и UI, SEO и развертывание</p>,
    arm: <p>Կայքի և UI դիզայն, SEO և տեղակայում</p>,
  };
  const job1skill2 = {
    en: (
      <p>
        Building the frontend using <strong>React JS</strong>
      </p>
    ),
    ru: (
      <p>
        Создание фронтенда с помощью <strong>React JS</strong>
      </p>
    ),
    arm: (
      <p>
        Frontend-ի կառուցում <strong>React JS</strong>-ով
      </p>
    ),
  };
  const job1skill3 = {
    en: (
      <p>
        Building the backend with <strong>Spring Boot(Java)/MySQL</strong>
      </p>
    ),
    ru: (
      <p>
        Создание бэкенда с помощью <strong>Spring Boot(Java)/MySQL</strong>
      </p>
    ),
    arm: (
      <p>
        Backend-ի կառուցում <strong>Spring Boot(Java)/MySQL</strong>-ով
      </p>
    ),
  };

  /*JOB 2*/

  const job2MainHeadline = {
    en: "Khnami Center",
    ru: "Центр Хнами",
    arm: "Խնամի Կենտրոն",
  };
  const job2Headline = {
    en: "Khnami Palliative Care Center",
    ru: "Центр Паллиативной Помощи Хнами",
    arm: "Խնամի Պալիատիվ Խնամքի Կենտրոն",
  };
  const job2Name = {
    en: "Frontend Web Developer",
    ru: "Frontend Веб-Разработчик",
    arm: "Frontend Վեբ Ծրագրավորող",
  };
  const job2Location = {
    en: "Armenia",
    ru: "Армения",
    arm: "Հայաստան",
  };
  const job2skill1 = {
    en: <p>Website design, SEO and deployment</p>,
    ru: <p>Дизайн веб-сайта, SEO и развертывание</p>,
    arm: <p>Կայքի դիզայն, SEO և տեղակայում</p>,
  };
  const job2skill2 = {
    en: (
      <p>
        Building the website using <strong>React JS</strong>
      </p>
    ),
    ru: (
      <p>
        Создание Веб-сайта с помощью <strong>React JS</strong>
      </p>
    ),
    arm: (
      <p>
        Կայք-ի կառուցում <strong>React JS</strong>-ով
      </p>
    ),
  };

  /* Headline */

  const techHeadline = {
    en: "Technologies",
    ru: "Технологии",
    arm: "Տեխնոլոգիաներ",
  };

  return (
    <section className={classes["experience"]} id="experience">
      <h2 className="headline">{experienceHeadline[lang]}</h2>
      <div className={classes["prof-exp--container"]}>
        <h3>{profExperienceHeadline[lang]}</h3>
        <DropdownTab
          imgName="e-pavement_logo"
          imgFolder="experience"
          imgAlt="e-Pavement - estonian startup tech company"
          mainHeadline="E-Pavement"
          mainDescription={job1Name[lang]}
          dropdownHeadline="E-Pavement OÜ"
          dropdownLocation={job1Location[lang]}
          dropdownYears={job1Duration[lang]}
          skill1={job1skill1[lang]}
          skill2={job1skill2[lang]}
          skill3={job1skill3[lang]}
        />
        <DropdownTab
          imgName="khnami_logo"
          imgFolder="experience"
          imgAlt="Khnami Palliative Care Center"
          mainHeadline={job2MainHeadline[lang]}
          mainDescription={job2Name[lang]}
          dropdownHeadline={job2Headline[lang]}
          dropdownLocation={job2Location[lang]}
          dropdownYears="08.2022 - 11.2022"
          skill1={job2skill1[lang]}
          skill2={job2skill2[lang]}
        />
      </div>
      <h3>{techHeadline[lang]}</h3>
      <div className={classes["skills--container"]}>
        <div className={classes["skill-category-box"]}>
          <h4>Frontend</h4>
          <ul>
            <li key={`tech_react`}>
              <Picture
                imgName="react"
                imgFolder="experience"
                imgAlt="React JS"
                imgClasses={classes["skill-logo"]}
              />
              <p>React JS</p>
            </li>
            <li key={`tech_redux`}>
              <Picture
                imgName="redux"
                imgFolder="experience"
                imgAlt="Redux"
                imgClasses={classes["skill-logo"]}
              />
              <p>Redux</p>
            </li>
            <li key={`tech_js`}>
              <Picture
                imgName="js"
                imgFolder="experience"
                imgAlt="JavaScript"
                imgClasses={classes["skill-logo"]}
              />
              <p>JavaScript</p>
            </li>
            <li key={`tech_typescript`}>
              <Picture
                imgName="typescript"
                imgFolder="experience"
                imgAlt="TypeScript"
                imgClasses={classes["skill-logo"]}
              />
              <p>TypeScript</p>
            </li>
            <li key={`tech_html`}>
              <Picture
                imgName="html5"
                imgFolder="experience"
                imgAlt="HTML5"
                imgClasses={classes["skill-logo"]}
              />
              <p>HTML5</p>
            </li>
            <li key={`tech_css`}>
              <Picture
                imgName="css3"
                imgFolder="experience"
                imgAlt="CSS3"
                imgClasses={classes["skill-logo"]}
              />
              <p>CSS3</p>
            </li>
          </ul>
        </div>
        <div className={classes["skill-category-box"]}>
          <h4>Backend</h4>
          <ul>
            <li key={`tech_java`}>
              <Picture
                imgName="java"
                imgFolder="experience"
                imgAlt="Java"
                imgClasses={classes["skill-logo"]}
              />
              <p>Java</p>
            </li>
            <li key={`tech_springboot`}>
              <Picture
                imgName="spring"
                imgFolder="experience"
                imgAlt="Spring Boot"
                imgClasses={classes["skill-logo"]}
              />
              <p>Spring Boot</p>
            </li>
            <li key={`tech_mysql`}>
              <Picture
                imgName="mysql"
                imgFolder="experience"
                imgAlt="MySQL"
                imgClasses={classes["skill-logo"]}
              />
              <p>MySQL</p>
            </li>
            <li key={`tech_docker`}>
              <Picture
                imgName="docker"
                imgFolder="experience"
                imgAlt="Docker"
                imgClasses={classes["skill-logo"]}
              />
              <p>Docker</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
