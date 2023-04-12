import classes from "./LangSelectBtn.module.css";
import { BiChevronDownCircle, BiChevronUpCircle } from "react-icons/bi";
import { useSelector } from "react-redux";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const LangSelectBtn = () => {
  const lang = useSelector((state) => state.language.activeLanguage);

  const [dropMenuOpen, setDropMenuOpen] = useState(false);

  return (
    <div
      className={classes["lang-select-box"]}
      onMouseEnter={() => setDropMenuOpen(true)}
      onMouseLeave={() => setDropMenuOpen(false)}
    >
      <div className={classes["lang-select-selector"]}>
        <img
          src={`${process.env.PUBLIC_URL}/images/util/${lang}_flag.jpg`}
          alt={`${lang} flag for language select`}
          className={classes["language-flag"]}
        />
        {dropMenuOpen ? <BiChevronUpCircle /> : <BiChevronDownCircle />}
      </div>
      <ul
        className={classes["lang-select-dropdown-box"]}
        style={{ display: dropMenuOpen ? "flex" : "none" }}
      >
        {lang !== "en" && (
          <li key={"lang-select-en"}>
            <NavLink to="/">
              <img
                src={`${process.env.PUBLIC_URL}/images/util/en_flag.jpg`}
                alt={`en flag for language select`}
                className={classes["language-flag"]}
                title={"English"}
              />
            </NavLink>
          </li>
        )}
        {lang !== "arm" && (
          <li key={"lang-select-arm"}>
            <NavLink to="/arm">
              <img
                src={`${process.env.PUBLIC_URL}/images/util/arm_flag.jpg`}
                alt={`arm flag for language select`}
                className={classes["language-flag"]}
                title={"Հայերեն"}
              />
            </NavLink>
          </li>
        )}
        {lang !== "ru" && (
          <li key={"lang-select-ru"}>
            <NavLink to="/ru">
              <img
                src={`${process.env.PUBLIC_URL}/images/util/ru_flag.jpg`}
                alt={`ru flag for language select`}
                className={classes["language-flag"]}
                title={"Русский"}
              />
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default LangSelectBtn;
