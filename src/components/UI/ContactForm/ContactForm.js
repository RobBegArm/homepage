import classes from "./ContactForm.module.css";

import { useSelector } from "react-redux";

const ContactForm = () => {
  const lang = useSelector((state) => state.language.activeLanguage);

  const nameLabel = {
    en: "Name",
    ru: "Имя",
    arm: "Անուն",
  };

  const emailLabel = {
    en: "Email",
    ru: "Почта",
    arm: "Փոստ",
  };

  const messageLabel = {
    en: "Message",
    ru: "Сообщение",
    arm: "Հաղորդագրություն",
  };

  return (
    <form className={classes["contact-form"]}>
      <div className={classes["form-element"]}>
        <label htmlFor="name">
          <p>{nameLabel[lang]}</p>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          minLength={"3"}
          maxLength={"60"}
          required
        />
      </div>
      <div className={classes["form-element"]}>
        <label htmlFor="email">
          <p>{emailLabel[lang]}</p>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          minLength={"3"}
          maxLength={"60"}
          required
        />
      </div>
      <div className={classes["form-element"]}>
        <label htmlFor="message">
          <p>{messageLabel[lang]}</p>
        </label>
        <input
          type="text"
          id="message"
          name="message"
          minLength={"3"}
          maxLength={"300"}
          required
        />
      </div>
      <button type="submit" className={`btn ${classes["form-btn"]}`}>
        <p>Submit</p>
      </button>
    </form>
  );
};

export default ContactForm;
