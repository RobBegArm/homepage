import classes from "./Contact.module.css";
import { useSelector } from "react-redux";

import ContactForm from "../UI/ContactForm/ContactForm";

const Contact = () => {
  const lang = useSelector((state) => state.language.activeLanguage);

  const contactHeadline = {
    en: "Contact",
    ru: "Контакт",
    arm: "Կապ",
    est: "Kontaktid",
  };

  const contactHeadline2 = {
    en: "Let's have a chat!",
    ru: "Давайте поговорим!",
    arm: "Եկեք զրուցենք:",
    est: "Võta ühendust!",
  };

  const contactDescription = {
    en: "Need help with a website? Have a business proposal in mind? Feel free to reach out using the contact form. I'm here to assist you and explore potential collaborations.",
    ru: "Нужна помощь с сайтом? Есть деловое предложение? Не стесняйтесь связаться с помощью контактной формы. Я здесь, чтобы помочь вам и изучить потенциальные варианты сотрудничества.",
    arm: "Կայքի հետ կապված օգնության կարիք ունե՞ք: Ձեր մտքում բիզնես առաջարկ ունե՞ք: Ազատորեն կապ հաստատեք՝ օգտագործելով կոնտակտային ձևը: Ես այստեղ եմ ձեզ օգնելու և հնարավոր համագործակցությունները բացահայտելու համար:",
    est: "Vajate abi veebilehega? Teil on äriidee? Võtke julgelt ühendust kasutades kontaktivormi. Olen siin, et teid aidata ja uurida võimalikke koostöövõimalusi.",
  };

  return (
    <section className={`main-section ${classes["contact"]}`} id="contact">
      <h2 className="headline">{contactHeadline[lang]}</h2>
      <div className={classes["contact--container"]}>
        <div className={classes["contact--description"]}>
          <h3>{contactHeadline2[lang]}</h3>
          <p>{contactDescription[lang]}</p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
