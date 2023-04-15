import classes from "./Work.module.css";
import { useSelector } from "react-redux";

import { FaExternalLinkAlt } from "react-icons/fa";

// import DropdownTab from "../UI/DropdownTab/DropdownTab";
import Gallery from "../UI/Gallery/Gallery";

const Work = () => {
  const lang = useSelector((state) => state.language.activeLanguage);
  const workHeadline = {
    en: "Work",
    ru: "Работа",
    arm: "Աշխատանք",
  };

  const workHeadline2 = {
    en: "Some of the projects I built",
    ru: "Некоторые из проектов",
    arm: "Իմ գործերից մի քանիսը",
  };

  const projectDescription1 = {
    en: 'An original website made for the Estonian tech company "E-Pavement" OÜ',
    ru: 'Оригинальный сайт для эстонской технической компании "E-Pavement" OÜ',
    arm: "Էստոնական «E-Pavement OÜ» տեխնոլոգիական ընկերության համար ստեղծված օրիգինալ կայք",
  };

  const projectDescription2 = {
    en: 'An original website made for "Khnami" palliative care center.',
    ru: 'Оригинальный сайт для центра паллиативной помощи "Хнами".',
    arm: "Օրիգինալ կայք՝ պատրաստված «Խնամի» պալիատիվ խնամքի կենտրոնի համար։",
  };

  return (
    <section className={`main-section ${classes["work"]}`} id="work">
      <h2 className="headline">{workHeadline[lang]}</h2>
      <h3>{workHeadline2[lang]}</h3>
      <div className={classes["work--container"]}>
        <article className={classes["project"]}>
          <div className={classes["project-link-box"]}>
            <a
              href="https://e-pavement.eu/"
              target={"_blank"}
              rel={"noreferrer"}
              className={`link ${classes["project-link"]}`}
              title="E-Pavement Website"
            >
              <p>1. e-pavement.eu</p>
              <FaExternalLinkAlt className={classes["link-icon"]} />
            </a>
          </div>
          <p className={classes["project--description"]}>
            {projectDescription1[lang]}
          </p>
          <Gallery
            imgCount={6}
            imgName="ePavementScreen"
            imgFolder="work"
            imgAlt="E-Pavement Website Screenshot"
          />
        </article>
        <article className={classes["project"]}>
          <div className={classes["project-link-box"]}>
            <a
              href="https://khnami-center.com/"
              target={"_blank"}
              rel={"noreferrer"}
              className={`link ${classes["project-link"]}`}
              title="Khnami Center Website"
            >
              <p>2. khnami-center.com</p>
              <FaExternalLinkAlt className={classes["link-icon"]} />
            </a>
          </div>
          <p className={classes["project--description"]}>
            {projectDescription2[lang]}
          </p>
          <Gallery
            imgCount={5}
            imgName="khnamiScreen"
            imgFolder="work"
            imgAlt="Khnami Palliative Care Center Website Screenshot"
          />
        </article>
      </div>
    </section>
  );
};

export default Work;
