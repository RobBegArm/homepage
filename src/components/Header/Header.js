import classes from "./Header.module.css";
import { useSelector } from "react-redux";

import HeaderNavLink from "../UI/HeaderNavLink/HeaderNavLink";
import LangSelectBtn from "../UI/LangSelectBtn/LangSelectBtn";

const Header = () => {
  const lang = useSelector((state) => state.language.activeLanguage);
  const resumeBtnTitle = { en: "Resume", ru: "Резюме", arm: "Ռեզյումե" };

  return (
    <header className={classes["header"]}>
      <div className={`${classes["header--container"]} container`}>
        <div className={classes["logo-box"]}>
          <p>LOGO</p>
        </div>
        <nav className={classes["header--nav"]}>
          <HeaderNavLink
            href="#about"
            title={{ en: "About", ru: "Обо мне", arm: "Իմ մասին" }}
          />
          <HeaderNavLink
            href="#experience"
            title={{ en: "Experience", ru: "Опыт", arm: "Փորձ" }}
          />
          <HeaderNavLink
            href="#work"
            title={{ en: "Work", ru: "Работа", arm: "Գործ" }}
          />
          <HeaderNavLink
            href="#contact"
            title={{ en: "Contact", ru: "Связь", arm: "Կապ" }}
          />
        </nav>
        <div className={classes["header--cta"]}>
          <a
            href="/CV_Robert_Beglaryan.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`${classes["resume-btn-link"]} link`}
          >
            {resumeBtnTitle[lang]}
          </a>
          <LangSelectBtn />
        </div>
      </div>
    </header>
  );
};

export default Header;
