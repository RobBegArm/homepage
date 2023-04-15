import { SmoothScrollTo } from "../../../hooks/CustomHooks";

const HeaderNavLink = (props) => {
  return (
    <a
      href={props.href}
      onClick={(e) => SmoothScrollTo(e, props.href)}
      className={"link"}
    >
      {props.title && <p>{props.title}</p>}
      {props.children}
    </a>
  );
};

export default HeaderNavLink;
