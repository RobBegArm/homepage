const SmoothScrollTo = (e, href) => {
  e.preventDefault();
  //Scroll back to top
  if (href === "#") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  //Scroll to other links
  else if (href !== "#" && href.startsWith("#")) {
    const sectionEl = document.querySelector(href);
    const yOffset = -40;
    const y =
      sectionEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  }
};

export { SmoothScrollTo };
