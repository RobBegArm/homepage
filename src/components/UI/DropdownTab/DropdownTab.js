import classes from "./DropdownTab.module.css";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";
import Picture from "../Picture/Picture";

const DropdownTab = (props) => {
  const [dropdownTabOpen, setDropdownTabOpen] = useState(false);

  const toggleTab = () => {
    setDropdownTabOpen(!dropdownTabOpen);
  };

  return (
    <div className={classes["dropdown-tab"]} onClick={toggleTab}>
      <div className={classes["main-tab"]}>
        {dropdownTabOpen ? (
          <BsChevronUp className={classes["chevron-up"]} />
        ) : (
          <BsChevronDown className={classes["chevron-down"]} />
        )}
        <Picture
          imgName={props.imgName}
          imgFolder={props.imgFolder}
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
        {props.dropdownDescription && (
          <p className={classes["dropdown-description"]}>
            {props.dropdownDescription}
          </p>
        )}
        {props.skill1 && (
          <ul>
            <li key={`skill_1_key_${props.imgName}`}>
              <GoPrimitiveDot className={classes["li-icon"]} />
              {props.skill1}
            </li>
            {props.skill2 && (
              <li key={`skill_2_key_${props.imgName}`}>
                <GoPrimitiveDot className={classes["li-icon"]} />
                {props.skill2}
              </li>
            )}
            {props.skill3 && (
              <li key={`skill_3_key_${props.imgName}`}>
                <GoPrimitiveDot className={classes["li-icon"]} />
                {props.skill3}
              </li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropdownTab;
