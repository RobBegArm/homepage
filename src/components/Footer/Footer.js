import classes from "./Footer.module.css";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  let year = new Date().getFullYear().toString();

  return (
    <footer>
      <div className={classes["social-container"]}>
        <a
          href="https://www.linkedin.com/in/robbegarm/"
          target={"_blank"}
          rel={"noreferrer"}
          className={`link ${classes["social-link"]}`}
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/RobBegArm"
          target={"_blank"}
          rel={"noreferrer"}
          className={`link ${classes["social-link"]}`}
        >
          <AiOutlineGithub />
        </a>
      </div>
      <p>{year} &#169; RobBegArm </p>
    </footer>
  );
};

export default Footer;
