import classes from "./MobileNav.module.css";

import MobileNavLink from "../MobileNavLink/MobileNavLink";

import { useSelector } from "react-redux";

import { calculateScrollTop } from "../../../hooks/CustomHooks";

import LangSelectBtn from "../LangSelectBtn/LangSelectBtn";

const MobileNav = (props) => {
  const lang = useSelector((state) => state.language.activeLanguage);

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

  return (
    <nav
      className={`${
        menuIsOpen ? classes[`nav--open`] : classes["nav--close"]
      } ${classes["mobile-nav"]}`}
      style={{ top: `${calculateScrollTop()}px` }}
    >
      <MobileNavLink href="#about" title={titleAbout[lang]} />
      <MobileNavLink href="#experience" title={titleExperience[lang]} />
      <MobileNavLink href="#work" title={titleWork[lang]} />
      <MobileNavLink href="#contact" title={titleContact[lang]} />
      <LangSelectBtn />
    </nav>
  );
};

export default MobileNav;
