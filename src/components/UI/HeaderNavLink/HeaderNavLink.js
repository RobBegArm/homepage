import { SmoothScrollTo } from "../../../hooks/CustomHooks";

const HeaderNavLink = (props) => {
  const onClickAction = (e) => {
    SmoothScrollTo(e, props.href);
  };

  return (
    <a href={props.href} onClick={(e) => onClickAction(e)} className={"link"}>
      {props.title && <p>{props.title}</p>}
      {props.children}
    </a>
  );
};

export default HeaderNavLink;
