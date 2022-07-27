import s from "./Button.module.css";

function Button({ text }) {
  return <button className={s.button}>{text}</button>;
}

export default Button;
