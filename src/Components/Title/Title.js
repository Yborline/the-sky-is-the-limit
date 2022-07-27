import s from "./Title.module.css";

function Title({ color, text }) {
  return color ? (
    <h3 className={s.titleWhite}>{text}</h3>
  ) : (
    <h3 className={s.titleBlack}>{text}</h3>
  );
}

export default Title;
