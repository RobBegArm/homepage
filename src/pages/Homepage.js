import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { languageActions } from "../store/languageSlice";
import { menuActions } from "../store/menuSlice";
import useWindowDimensions from "../hooks/useWindowsDimensions";

import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Experience from "../components/Experience/Experience";
import Work from "../components/Work/Work";
import MobileNav from "../components/UI/MobileNav/MobileNav";
import Contact from "../components/Contact/Contact";

const Homepage = (props) => {
  /* SETS ACTIVE LANGUAGE */
  useEffect(() => {
    dispatch(languageActions.setLanguage(props.activeLang));
    /* eslint-disable */
  }, []);

  /* MENU STATE HANDLING*/
  const menuIsOpen = useSelector((state) => state.menu.menuIsOpen);
  const dispatch = useDispatch();

  const closeMenuHandler = () => {
    dispatch(menuActions.closeMenu());
  };

  /* PREVENT SCROLL IF MENU IS OPEN */
  useEffect(() => {
    document.querySelector("*").style.overflow = menuIsOpen
      ? "hidden"
      : "inherit";
  }, [menuIsOpen]);

  //Calculate Window Width to check if menu should be force closed
  let needToForceCloseMenu = false;

  const { width } = useWindowDimensions();
  if (width >= 993 && menuIsOpen) {
    needToForceCloseMenu = true;
  }

  //Close Menu If Opening Menu First, and then enlarging the view
  useEffect(() => {
    if (needToForceCloseMenu && menuIsOpen) {
      closeMenuHandler();
      needToForceCloseMenu = false;
    }
  }, [needToForceCloseMenu]);

  return (
    <Fragment>
      <Header />
      <MobileNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Homepage;
