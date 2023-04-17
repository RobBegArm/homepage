import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";

import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

import { menuActions } from "../../store/menuSlice";

import HeaderNavLink from "../UI/HeaderNavLink/HeaderNavLink";
import LangSelectBtn from "../UI/LangSelectBtn/LangSelectBtn";

const Header = () => {
  const lang = useSelector((state) => state.language.activeLanguage);

  const resumeBtnTitle = {
    en: "Resume",
    ru: "Резюме",
    arm: "Ռեզյումե",
    est: "CV",
  };

  const titleAbout = {
    en: "About",
    ru: "Обо мне",
    arm: "Իմ մասին",
    est: "Minust",
  };
  const titleExperience = {
    en: "Experience",
    ru: "Опыт",
    arm: "Փորձ",
    est: "Kogemus",
  };
  const titleWork = {
    en: "Work",
    ru: "Работа",
    arm: "Գործ",
    est: "Tööd",
  };
  const titleContact = {
    en: "Contact",
    ru: "Связь",
    arm: "Կապ",
    est: "Kontaktid",
  };

  const menuIsOpen = useSelector((state) => state.menu.menuIsOpen);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(menuActions.setMenuStateIsOpen(!menuIsOpen));
  };

  const closeMenuHandler = () => {
    dispatch(menuActions.closeMenu());
  };

  return (
    <header className={`${classes["header"]} sticky`} id="header">
      <div className={`${classes["header--container"]} container`}>
        <HeaderNavLink href="#">
          <img
            src={`${process.env.PUBLIC_URL}/images/util/RB_logo.svg`}
            alt={"Robert Beglaryan Logo"}
            className={classes["logo-image"]}
            onClick={closeMenuHandler}
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
            href="https://robbegarm.github.io/homepage/CV_Robert_Beglaryan.pdf"
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
          onClick={toggleMenuHandler}
        >
          {menuIsOpen ? <MdOutlineClose /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
};

export default Header;
