import classes from "./Header.module.css";
import { useSelector } from "react-redux";

import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

import HeaderNavLink from "../UI/HeaderNavLink/HeaderNavLink";
import LangSelectBtn from "../UI/LangSelectBtn/LangSelectBtn";

const Header = (props) => {
  const lang = useSelector((state) => state.language.activeLanguage);

  const resumeBtnTitle = { en: "Resume", ru: "Резюме", arm: "Ռեզյումե" };

  const titleAbout = { en: "About", ru: "Обо мне", arm: "Իմ մասին" };
  const titleExperience = { en: "Experience", ru: "Опыт", arm: "Փորձ" };
  const titleWork = { en: "Work", ru: "Работа", arm: "Գործ" };
  const titleContact = { en: "Contact", ru: "Связь", arm: "Կապ" };

  return (
    <header className={`${classes["header"]} sticky`} id="header">
      <div className={`${classes["header--container"]} container`}>
        <HeaderNavLink href="#">
          <img
            src={`${process.env.PUBLIC_URL}/images/util/RB_logo.svg`}
            alt={"Robert Beglaryan Logo"}
            className={classes["logo-image"]}
          />
        </HeaderNavLink>
        <nav className={classes["header--nav"]}>
          <HeaderNavLink href="#about" title={titleAbout[lang]} />
          <HeaderNavLink href="#experience" title={titleExperience[lang]} />
          <HeaderNavLink href="#work" title={titleWork[lang]} />
          <HeaderNavLink href="#contact" title={titleContact[lang]} />
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
        <button
          className={`btn ${classes["btn--menu"]}`}
          onClick={props.changeMenuState}
        >
          {props.menuIsOpen ? <MdOutlineClose /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
