import classes from "./ContactForm.module.css";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import swal from "sweetalert";
import { useSelector } from "react-redux";

const ContactForm = () => {
  const lang = useSelector((state) => state.language.activeLanguage);

  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef();

  async function formSubmitHandler(e) {
    e.preventDefault();
    try {
      setIsLoading(true);
      const response = await emailjs.sendForm(
        "service_3uejmmj",
        "template_j70pmqy",
        formRef.current,
        "uNwEU8kokrc1FzHXY"
      );
      // console.log(response);
      if (response.status === 200) {
        swal({
          title: successResponseTitle[lang],
          text: successResponseMessage[lang],
          icon: "success",
          button: "Ok",
        });
        e.target.reset();
        setIsLoading(false);
      }
    } catch (error) {
      swal({
        title: errorResponseTitle[lang],
        text: `${errorResponseMessage[lang]} | ${error.message}`,
        icon: "error",
        button: "Ok",
      });
      setIsLoading(false);
    }
  }

  const successResponseTitle = {
    en: "Thank You!",
    ru: "Спасибо!",
    arm: "Շնորհակալություն",
  };

  const successResponseMessage = {
    en: "Form submitted successfully! We will reach out to you as soon as possible.",
    ru: "Форма успешно отправлена! Мы свяжемся с вами как можно скорее.",
    arm: "Ձևը հաջողությամբ ուղարկվեց: Մենք կկապվենք Ձեզ հետ որքան հնարավոր է շուտ:",
  };

  const errorResponseTitle = {
    en: "Oops, something went wrong!",
    ru: "Что-то пошло не так!",
    arm: "Ինչ որ բան սխալ գնաց։",
  };

  const errorResponseMessage = {
    en: "Please try again later. Sorry for the inconvenience.",
    ru: "Пожалуйста, повторите попытку позже. Приносим извинения за неудобства.",
    arm: "Խնդրում ենք փորձել մի փոքր ուշ. Ներողություն անհանգստության համար.",
  };

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

  const btnLabel = {
    en: "Submit",
    ru: "Отправить",
    arm: "Ուղարկել",
  };

  return (
    <form
      className={classes["contact-form"]}
      name="contact-form"
      onSubmit={formSubmitHandler}
      ref={formRef}
    >
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
          className={isLoading ? classes["disabled-input"] : ""}
          disabled={isLoading}
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
          className={isLoading ? classes["disabled-input"] : ""}
          disabled={isLoading}
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
          className={isLoading ? classes["disabled-input"] : ""}
          disabled={isLoading}
          required
        />
      </div>
      <button
        type="submit"
        className={`btn ${classes["form-btn"]} ${
          isLoading ? classes["disabled-input"] : ""
        }`}
        disabled={isLoading}
      >
        <p>{isLoading ? "..." : btnLabel[lang]}</p>
      </button>
    </form>
  );
};

export default ContactForm;
