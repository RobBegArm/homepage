import classes from "./Gallery.module.css";
import { useState } from "react";

import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import { IoEllipse, IoEllipseOutline } from "react-icons/io5";

import Picture from "../../UI/Picture/Picture";

const Gallery = (props) => {
  const [activeImageNumber, setActiveImageNumber] = useState(1);
  const [animation, setAnimation] = useState("shade");

  const switchRight = () => {
    setActiveImageNumber(
      activeImageNumber < props.imgCount ? activeImageNumber + 1 : 1
    );
    setAnimation("shade");
  };

  const switchLeft = () => {
    setActiveImageNumber(
      activeImageNumber > 1 ? activeImageNumber - 1 : props.imgCount
    );
    setAnimation("shade");
  };

  const setImageDirectly = (index) => {
    setActiveImageNumber(index);
    setAnimation("shade");
  };

  // Gallery on Touch

  let userTouchX;

  const handleStart = (e) => {
    userTouchX = e.changedTouches[0].clientX;
  };

  const handleEnd = (e) => {
    let slideSize = e.changedTouches[0].clientX - userTouchX;
    if (Math.abs(slideSize) > 50) {
      slideSize > 0 ? switchLeft() : switchRight();
    }
  };

  const galleryBulletsArray = Array.from({ length: props.imgCount });

  const galleryNavBullets = galleryBulletsArray.map((el, i) => {
    return (
      <li
        className="gallery-nav-bullet"
        id={`gallery_bullet_${i + 1}`}
        key={`key_nav_bullet_${i + 1}`}
        onClick={() => setImageDirectly(i + 1)}
      >
        {activeImageNumber === i + 1 ? (
          <IoEllipse className="gallery-nav-icon" />
        ) : (
          <IoEllipseOutline className="gallery-nav-icon" />
        )}
      </li>
    );
  });

  return (
    <div className={classes["gallery-element"]}>
      {/* <!-- gallery image --> */}
      <div
        className={`${classes["gallery-img-box"]} ${animation}`}
        onAnimationEnd={() => {
          setAnimation("");
        }}
        onTouchStart={handleStart}
        onTouchEnd={handleEnd}
      >
        <Picture
          imgName={`${props.imgName}${activeImageNumber}`}
          imgFolder={props.imgFolder}
          imgAlt={props.imgAlt}
          imgClasses={classes["gallery-img"]}
        />
        <button
          className={`btn ${classes["gallery-btn-left"]}`}
          onClick={switchLeft}
        >
          <BsChevronLeft className={classes["gallery-icon"]} />
        </button>
        <button
          className={`btn ${classes["gallery-btn-right"]}`}
          onClick={switchRight}
        >
          <BsChevronRight className={classes["gallery-icon"]} />
        </button>
      </div>
      {/* <!-- gallery navigation bullets --> */}
      <ul className={classes["gallery-nav-bullets"]}> {galleryNavBullets}</ul>
      {/* <!-- gallery buttons --> */}
    </div>
  );
};

export default Gallery;
