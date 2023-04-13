import classes from "./DropdownTab.module.css";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Picture from "../Picture/Picture";

const DropdownTab = (props) => {
  const [dropdownTabOpen, setDropdownTabOpen] = useState(false);

  const toggleTab = () => {
    setDropdownTabOpen(!dropdownTabOpen);
  };

  return (
    <div className={classes["dropdown-tab"]}>
      <div className={classes["main-tab"]}>
        {dropdownTabOpen ? (
          <BsChevronUp onClick={toggleTab} className={classes["chevron-up"]} />
        ) : (
          <BsChevronDown
            onClick={toggleTab}
            className={classes["chevron-down"]}
          />
        )}
        <Picture
          imgName={props.imgName}
          imgFolder="about"
          imgAlt={props.imgAlt}
          imgClasses={classes["about-logo"]}
        />
        <p className={classes["dropdown-headline"]}>{props.mainHeadline}</p>
        <p className={classes["dropdown-top-description"]}>
          {props.mainDescription}
        </p>
      </div>
      <div
        className={`${classes["dropdown-content"]} ${
          dropdownTabOpen && classes["dropdown-content-open"]
        }`}
      >
        <p className={classes["dropdown-top-headline"]}>
          {props.dropdownHeadline}
        </p>
        <p>{props.dropdownLocation}</p>
        <p className={classes["dropdown-years"]}>{props.dropdownYears}</p>
        <p className={classes["dropdown-description"]}>
          {props.dropdownDescription}
        </p>
      </div>
    </div>
  );
};

export default DropdownTab;
