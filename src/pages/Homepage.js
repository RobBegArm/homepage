import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { languageActions } from "../store/languageSlice";

// import classes from "./Homepage.module.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
// import About from "../components/About/About";

const Homepage = (props) => {
  const [menuIsOpen, setMenuIsOPen] = useState(false);

  useEffect(() => {
    document.querySelector("*").style.overflow = menuIsOpen
      ? "hidden"
      : "inherit";
  }, [menuIsOpen]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(languageActions.setLanguage(props.activeLang));
    /* eslint-disable */
  }, []);

  const changeMenuStateHandler = () => {
    setMenuIsOPen(!menuIsOpen);
  };

  const closeMenuHandler = () => {
    setMenuIsOPen(false);
  };

  /* SETUP THE VALUES */

  return (
    <Fragment>
      <Header
        menuIsOpen={menuIsOpen}
        changeMenuState={changeMenuStateHandler}
        closeMenu={closeMenuHandler}
      />
      <main>
        <Hero />
        {/* <About /> */}
      </main>
      <Footer />
    </Fragment>
  );
};

export default Homepage;
