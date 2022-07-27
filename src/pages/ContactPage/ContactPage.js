import imgContact from "../../images/image/Contact.jpg";
import Title from "../../Components/Title/Title";
import ContactForm from "../../Components/ContactForm/ContactForm";
import Footer from "../../Components/Footer/Footer";
import s from "./ContactPage.module.css";

function ContactPage() {
  return (
    <>
      <img className={s.img} alt="Man looking at laptop" src={imgContact}></img>
      <div className={s.text}>

        <h3 className={s.title}> Request Callback</h3>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
