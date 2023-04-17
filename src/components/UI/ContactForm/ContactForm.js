import classes from "./ContactForm.module.css";

import { useRef } from "react";
import swal from "sweetalert";
import { useSelector } from "react-redux";

import { useForm } from "@formspree/react";

const ContactForm = () => {
  const lang = useSelector((state) => state.language.activeLanguage);

  const [state, handleSubmit] = useForm("xrgvonbv");

  const nameInputRef = useRef();
  const emailInputRef = useRef();
  const messageInputRef = useRef();

  /* FORM */

  async function formSubmitHandler(e) {
    e.preventDefault();
    const correctNameInput = checkNameInput(nameInputRef.current.value.trim());
    const correctEmailInput = checkEmailInput(
      emailInputRef.current.value.trim()
    );
    const correctMessageInput = checkMessageInput(
      messageInputRef.current.value.trim()
    );
    if (!correctNameInput || !correctEmailInput || !correctMessageInput) {
      return;
    }
    try {
      const response = await handleSubmit(e);
      if (state.succeeded && response.response.status === 200) {
        swal({
          title: successResponseTitle[lang],
          text: successResponseMessage[lang],
          icon: "success",
          button: "Ok",
        });
        e.target.reset();
      }
    } catch (error) {
      swal({
        title: errorResponseTitle[lang],
        text: `${errorResponseMessage[lang]} | ${
          state.errors["message"] || error.message || error.text
        }`,
        icon: "error",
        button: "Ok",
      });
    }
  }

  /* VALIDATION */

  const checkNameInput = (name) => {
    if (name.length <= 2) {
      swal({
        title: "Please provide a valid input!",
        text: "name should be longer than 2 characters!",
        icon: "warning",
        button: "Ok",
      });
      return false;
    }
    if (name.length > 40) {
      swal({
        title: "Please provide a valid input!",
        text: "name should not be longer than 40 characters!",
        icon: "warning",
        button: "Ok",
      });
      return false;
    }
    const regexName = /^[a-zA-ZüÜõÕöÖäÄžŽšŠ]+[a-zA-ZüÜõÕöÖäÄžŽšŠ]+$/;
    const regexNameAndSurname = /^[a-zA-ZüÜõÕöÖäÄžŽšŠ]+ [a-zA-ZüÜõÕöÖäÄžŽšŠ]+$/;
    const regexNameAnd2Surnames =
      /^[a-zA-ZüÜõÕöÖäÄžŽšŠ]+ [a-zA-ZüÜõÕöÖäÄžŽšŠ]+ [a-zA-ZüÜõÕöÖäÄžŽšŠ]+$/;
    const regexNameAnd3Surnames =
      /^[a-zA-ZüÜõÕöÖäÄžŽšŠ]+ [a-zA-ZüÜõÕöÖäÄžŽšŠ]+ [a-zA-ZüÜõÕöÖäÄžŽšŠ]+ [a-zA-ZüÜõÕöÖäÄžŽšŠ]+$/;
    if (
      !(
        regexName.test(name) ||
        regexNameAndSurname.test(name) ||
        regexNameAnd2Surnames.test(name) ||
        regexNameAnd3Surnames.test(name)
      )
    ) {
      swal({
        title: "Please provide a valid input!",
        text: "Name should contain latin letters and no special characters or numbers!",
        icon: "warning",
        button: "Ok",
      });
      return false;
    }
    return true;
  };

  const checkEmailInput = (email) => {
    const regexEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!regexEmail.test(email)) {
      swal({
        title: "Please provide a valid input!",
        text: "E-mail Input is invalid!",
        icon: "warning",
        button: "Ok",
      });
      return false;
    }
    return true;
  };

  const checkMessageInput = (message) => {
    if (message.length > 2000) {
      swal({
        title: "Please provide a valid input!",
        text: "Message input should not be longer than 2000 characters!",
        icon: "warning",
        button: "Ok",
      });
      return false;
    }
    return true;
  };

  /* TEXT */

  const successResponseTitle = {
    en: "Thank You!",
    ru: "Спасибо!",
    arm: "Շնորհակալություն",
    est: "Aitäh!",
  };

  const successResponseMessage = {
    en: "Form submitted successfully! We will reach out to you as soon as possible.",
    ru: "Форма успешно отправлена! Мы свяжемся с вами как можно скорее.",
    arm: "Ձևը հաջողությամբ ուղարկվեց: Մենք կկապվենք Ձեզ հետ որքան հնարավոր է շուտ:",
    est: "Ankeet edukalt esitatud! Võtame Teiega ühendust esimesel võimalusel.",
  };

  const errorResponseTitle = {
    en: "Oops, something went wrong!",
    ru: "Что-то пошло не так!",
    arm: "Ինչ որ բան սխալ գնաց։",
    est: "Vabandame, midagi läks valesti!",
  };

  const errorResponseMessage = {
    en: "Please try again later. Sorry for the inconvenience.",
    ru: "Пожалуйста, повторите попытку позже. Приносим извинения за неудобства.",
    arm: "Խնդրում ենք փորձել մի փոքր ուշ. Ներողություն անհանգստության համար.",
    est: "Palun proovige hiljem uuesti. Vabandame ebamugavuste pärast.",
  };

  const nameLabel = {
    en: "Name",
    ru: "Имя",
    arm: "Անուն",
    est: "Nimi",
  };

  const emailLabel = {
    en: "Email",
    ru: "Почта",
    arm: "Էլ․ Փոստ",
    est: "Email",
  };

  const messageLabel = {
    en: "Message",
    ru: "Сообщение",
    arm: "Հաղորդագրություն",
    est: "Sõnum",
  };

  const btnLabel = {
    en: "Submit",
    ru: "Отправить",
    arm: "Ուղարկել",
    est: "Saada",
  };

  return (
    <form
      className={classes["contact-form"]}
      name="contact-form"
      onSubmit={formSubmitHandler}
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
          maxLength={"40"}
          className={state.submitting ? classes["disabled-input"] : ""}
          disabled={state.submitting}
          ref={nameInputRef}
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
          className={state.submitting ? classes["disabled-input"] : ""}
          disabled={state.submitting}
          ref={emailInputRef}
          required
        />
      </div>
      <div className={classes["form-element"]}>
        <label htmlFor="message">
          <p>{messageLabel[lang]}</p>
        </label>
        <textarea
          type="text"
          id="message"
          name="message"
          minLength={"3"}
          maxLength={"2000"}
          className={state.submitting ? classes["disabled-input"] : ""}
          disabled={state.submitting}
          ref={messageInputRef}
          required
        />
      </div>
      <button
        type="submit"
        className={`btn ${classes["form-btn"]} ${
          state.submitting ? classes["disabled-input"] : ""
        }`}
        disabled={state.submitting}
      >
        <p>{state.submitting ? "..." : btnLabel[lang]}</p>
      </button>
    </form>
  );
};

export default ContactForm;