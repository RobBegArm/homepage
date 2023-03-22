import classes from "./HeaderNavLink.module.css";
import { SmoothScrollTo } from "../../../hooks/CustomHooks";

import { useSelector } from "react-redux";

const HeaderNavLink = (props) => {
  const lang = useSelector((state) => state.language.activeLanguage);

  return (
    <a
      href={props.href}
      onClick={(e) => SmoothScrollTo(e, props.href)}
      className={`${classes["header--link"]} link`}
    >
      {props.title[lang]}
    </a>
  );
};

export default HeaderNavLink;
