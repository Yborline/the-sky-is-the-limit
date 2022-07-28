import s from "./Button.module.css";

function Button({ border, text }) {
  return border === true ? (
    <button className={s.buttonBorder}> {text}</button>
  ) : (
    <button className={s.button}> {text}</button>
  );
}

export default Button;
