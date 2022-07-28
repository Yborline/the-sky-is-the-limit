import ContactForm from "../../Components/ContactForm/ContactForm";
import Footer from "../../Components/Footer/Footer";
import s from "./ContactPage.module.css";

function ContactPage() {
  return (
    <>
      <div className={s.container}>
        <div className={s.img}></div>
        <div className={s.text}>
          <h3 className={s.title}> Request Callback</h3>
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactPage;
