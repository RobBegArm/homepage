import classes from "./Footer.module.css";
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

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
          title="LinkedIn"
        >
          <AiFillLinkedin />
          <p>linkedin.com/in/robbegarm</p>
        </a>
        <a
          href="https://github.com/RobBegArm"
          target={"_blank"}
          rel={"noreferrer"}
          className={`link ${classes["social-link"]}`}
          title="GitHub"
        >
          <AiOutlineGithub />
          <p>github.com/RobBegArm</p>
        </a>
        <a
          href="mailto:robbegarm@gmail.com?subject=Contact From Website"
          target={"_blank"}
          rel={"noreferrer"}
          className={`link ${classes["social-link"]}`}
          title="Mail"
        >
          <AiOutlineMail />
          <p>robbegarm@gmail.com</p>
        </a>
        <a
          href="tel:+37256804966"
          target={"_blank"}
          rel={"noreferrer"}
          className={`link ${classes["social-link"]}`}
          title="Phone"
        >
          <AiOutlinePhone />
          <p>+37256804966</p>
        </a>
      </div>
      <p>{year} &#169; RobBegArm </p>
    </footer>
  );
};

export default Footer;
