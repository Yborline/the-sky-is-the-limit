import s from "./Button.module.css";
import sprite from "../../images/icons/sprites.svg";

function Button({ border, text }) {
  return border === true ? (
    <button className={s.buttonBorder}>{text}</button>
  ) : (
    <button className={s.button}>
      {" "}
      <svg className={s.svg} width="9" height="12">
        <use href={`${sprite}#vector`}></use>
      </svg>{" "}
      {text}
    </button>
  );
}

export default Button;
