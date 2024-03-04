import { useSelector } from "react-redux";
import classes from "./Experience.module.css";

import DropdownTab from "../UI/DropdownTab/DropdownTab";
import Picture from "../UI/Picture/Picture";

const Experience = () => {
  const lang = useSelector((state) => state.language.activeLanguage);

  const experienceHeadline = {
    en: "Experience",
    ru: "Опыт",
    arm: "Փորձ",
    est: "Kogemus",
  };

  const profExperienceHeadline = {
    en: "Professional experience",
    ru: "Опыт работы",
    arm: "Մասնագիտական փորձ",
    est: "Erialane kogemus",
  };

  /*JOB 3*/

  const job3Duration = {
    en: "05.2023 - now",
    ru: "05.2023 - сейчас",
    arm: "05.2023 - առայժմ",
    est: "05.2023 - praeguseni",
  };
  const job3MainHeadline = "Bally's Estonia";
  const job3Headline = "Bally's Estonia OÜ";
  const job3Name = {
    en: "Frontend Game Developer",
    ru: "Frontend Разработчик Игр",
    arm: "Frontend Խաղերի Ծրագրավորող",
    est: "Frontend Mängu Arendaja",
  };
  const job3Location = {
    en: "Estonia",
    ru: "Эстония",
    arm: "Էստոնիա",
    est: "Eesti",
  };
  const job3skill1 = {
    en: (
      <p>
        Developing slot games using <strong>Typescript</strong> and{" "}
        <strong>Pixi.js</strong>
      </p>
    ),
    ru: (
      <p>
        Разработка слот-игр с помощью <strong>Typescript</strong> и{" "}
        <strong>Pixi.js</strong>
      </p>
    ),
    arm: (
      <p>
        Սլոտ խաղերի մշակում <strong>Typescript</strong>-ի և{" "}
        <strong>Pixi.js</strong>-ի միջոցով
      </p>
    ),
    est: (
      <p>
        Slot-mängude arendamine kasutades <strong>Typescript</strong> ja{" "}
        <strong>Pixi.js</strong>
      </p>
    ),
  };
  const job3skill2 = {
    en: <p>Participating in strategic planning, effort estimation</p>,
    ru: <p>Участие в стратегическом планировании, оценке усилий</p>,
    arm: <p>Պլանավորմանը մասնակցություն, ջանքերի գնահատում</p>,
    est: (
      <p>Osalemine strateegilises planeerimises, jõupingutuste hindamises</p>
    ),
  };
  const job3skill3 = {
    en: <p>Influencing technical decision-making</p>,
    ru: <p>Влияние на принятие технических решений</p>,
    arm: <p>Ազդեցություն տեխնիկական որոշումների կայացման վրա</p>,
    est: <p>Tehniliste otsuste tegemise menetluste mõjutamine</p>,
  };

  /*JOB 2*/

  const job2Duration = "11.2022 - 04.2023";
  const job2Name = {
    en: "Frontend Web Developer",
    ru: "Frontend Веб-Разработчик",
    arm: "Frontend Վեբ Ծրագրավորող",
    est: "Frontend Veb Arendaja",
  };
  const job2Location = {
    en: "Estonia",
    ru: "Эстония",
    arm: "Էստոնիա",
    est: "Eesti",
  };
  const job2skill1 = {
    en: (
      <p>
        Building the company's website using <strong>React JS</strong>
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
    est: (
      <p>
        Frontend-i arendamine <strong>React JS</strong>-iga
      </p>
    ),
  };
  const job2skill2 = {
    en: <p>Original UI design, webpage responsiveness</p>,
    ru: <p>Дизайн веб-сайта и UI, SEO и развертывание</p>,
    arm: <p>Կայքի և UI դիզայն, SEO և տեղակայում</p>,
    est: <p>Veebilehtede ja kasutajaliidese disain , SEO ja avaldamine</p>,
  };
  const job2skill3 = {
    en: <p>Search Engine Optimization and deployment</p>,
    ru: <p>Дизайн веб-сайта и UI, SEO и развертывание</p>,
    arm: <p>Կայքի և UI դիզայն, SEO և տեղակայում</p>,
    est: <p>Veebilehtede ja kasutajaliidese disain , SEO ja avaldamine</p>,
  };

  /*JOB 1*/

  const job1MainHeadline = {
    en: "Khnami Center",
    ru: "Центр Хнами",
    arm: "Խնամի Կենտրոն",
    est: "Khnami Keskus",
  };
  const job1Headline = {
    en: "Khnami Palliative Care Center",
    ru: "Центр Паллиативной Помощи Хнами",
    arm: "Խնամի Պալիատիվ Խնամքի Կենտրոն",
    est: "Khnami Palliatiivravi Hoolduskeskus",
  };
  const job1Name = {
    en: "Frontend Web Developer",
    ru: "Frontend Веб-Разработчик",
    arm: "Frontend Վեբ Ծրագրավորող",
    est: "Frontend Veb Arendaja",
  };
  const job1Location = {
    en: "Estonia",
    ru: "Эстония",
    arm: "Էստոնիա",
    est: "Eesti",
  };
  const job1skill1 = {
    en: (
      <p>
        Building the company's website using <strong>React JS</strong>
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
    est: (
      <p>
        Frontend-i arendamine <strong>React JS</strong>-iga
      </p>
    ),
  };
  const job1skill2 = {
    en: <p>Original UI design, webpage responsiveness</p>,
    ru: <p>Дизайн веб-сайта и UI, SEO и развертывание</p>,
    arm: <p>Կայքի և UI դիզայն, SEO և տեղակայում</p>,
    est: <p>Veebilehtede ja kasutajaliidese disain , SEO ja avaldamine</p>,
  };
  const job1skill3 = {
    en: <p>Search Engine Optimization and deployment</p>,
    ru: <p>Дизайн веб-сайта и UI, SEO и развертывание</p>,
    arm: <p>Կայքի և UI դիզայն, SEO և տեղակայում</p>,
    est: <p>Veebilehtede ja kasutajaliidese disain , SEO ja avaldamine</p>,
  };

  /* Headline */

  const techHeadline = {
    en: "Technologies",
    ru: "Технологии",
    arm: "Տեխնոլոգիաներ",
    est: "Tehnoloogiad",
  };

  return (
    <section
      className={`main-section ${classes["experience"]}`}
      id="experience"
    >
      <h2 className="headline">{experienceHeadline[lang]}</h2>
      <div className={classes["prof-exp--container"]}>
        <h3>{profExperienceHeadline[lang]}</h3>
        <DropdownTab
          imgName="ballys_logo"
          imgFolder="experience"
          imgAlt="Ballys Logo"
          mainHeadline={job3MainHeadline}
          mainDescription={job3Name[lang]}
          dropdownHeadline={job3Headline}
          dropdownLocation={job3Location[lang]}
          dropdownYears={job3Duration[lang]}
          skill1={job3skill1[lang]}
          skill2={job3skill2[lang]}
          skill3={job3skill3[lang]}
        />
        <DropdownTab
          imgName="e-pavement_logo"
          imgFolder="experience"
          imgAlt="e-Pavement - estonian startup tech company"
          mainHeadline="E-Pavement"
          mainDescription={job2Name[lang]}
          dropdownHeadline="E-Pavement OÜ"
          dropdownLocation={job2Location[lang]}
          dropdownYears={job2Duration}
          skill1={job2skill1[lang]}
          skill2={job2skill2[lang]}
          skill3={job2skill3[lang]}
        />
        <DropdownTab
          imgName="khnami_logo"
          imgFolder="experience"
          imgAlt="Khnami Palliative Care Center"
          mainHeadline={job1MainHeadline[lang]}
          mainDescription={job1Name[lang]}
          dropdownHeadline={job1Headline[lang]}
          dropdownLocation={job1Location[lang]}
          dropdownYears="08.2022 - 11.2022"
          skill1={job1skill1[lang]}
          skill2={job1skill2[lang]}
          skill3={job1skill3[lang]}
        />
      </div>
      <h3>{techHeadline[lang]}</h3>
      <div className={classes["skills--container"]}>
        <div className={classes["skill-category-box"]}>
          <h4>Web Development</h4>
          <ul>
            <li key={`tech_typescript`}>
              <Picture
                imgName="typescript"
                imgFolder="experience"
                imgAlt="TypeScript"
                imgClasses={classes["skill-logo"]}
              />
              <p>TypeScript</p>
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
          <h4>Game Development</h4>
          <ul>
            <li key={`tech_pixijs`}>
              <Picture
                imgName="pixijs_logo"
                imgFolder="experience"
                imgAlt="Pixi JS"
                imgClasses={classes["skill-logo"]}
              />
              <p>Pixi JS</p>
            </li>
            <li key={`tech_xstate`}>
              <Picture
                imgName="xstate_logo"
                imgFolder="experience"
                imgAlt="XState"
                imgClasses={classes["skill-logo"]}
              />
              <p>Xstate</p>
            </li>
            <li key={`tech_rxjs`}>
              <Picture
                imgName="rxjs_logo"
                imgFolder="experience"
                imgAlt="RxJS"
                imgClasses={classes["skill-logo"]}
              />
              <p>RxJS</p>
            </li>
            <li key={`tech_jest`}>
              <Picture
                imgName="jest_logo"
                imgFolder="experience"
                imgAlt="jest"
                imgClasses={classes["skill-logo"]}
              />
              <p>Unit Testing (Jest)</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
