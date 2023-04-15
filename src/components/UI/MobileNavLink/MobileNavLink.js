import { SmoothScrollTo } from "../../../hooks/CustomHooks";

import { useDispatch } from "react-redux";

import { menuActions } from "../../../store/menuSlice";

const MobileNavLink = ({ href, title, onClick }) => {
  const dispatch = useDispatch();

  const closeMenuHandlerRDX = () => {
    dispatch(menuActions.closeMenu());
  };

  const onClickHandler = (e) => {
    SmoothScrollTo(e, href);
    closeMenuHandlerRDX();
  };

  return (
    <a href={href} onClick={(e) => onClickHandler(e)} className={"link"}>
      <p>{title}</p>
    </a>
  );
};

export default MobileNavLink;
