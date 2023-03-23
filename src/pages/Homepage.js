import { Fragment, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch } from "react-redux";
import { languageActions } from "../store/languageSlice";

import classes from "./Homepage.module.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import MobileNav from "../components/UI/MobileNav/MobileNav";
import Hero from "../components/Hero/Hero";

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
  }, []);

  const changeMenuStateHandler = () => {
    setMenuIsOPen(!menuIsOpen);
  };

  const closeMenuHandler = () => {
    setMenuIsOPen(false);
  };

  let documentTitle;
  let metaUrl;
  let metaDescription;
  let metaKeywords;
  let ogDescription;
  let ogImageUrl;

  /* SETUP THE VALUES */

  return (
    <Fragment>
      <Helmet>
        <title>{documentTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <meta property="og:title" content={documentTitle} />
        <meta property="og:url" content={metaUrl} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <link rel="canonical" href={metaUrl} />
      </Helmet>
      <Header />
      <main>
        {menuIsOpen && (
          <MobileNav
            menuIsOpen={menuIsOpen}
            changeMenuState={changeMenuStateHandler}
            closeMenu={closeMenuHandler}
          />
        )}
        <Hero />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Homepage;
