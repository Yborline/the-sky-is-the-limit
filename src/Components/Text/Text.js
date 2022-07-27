import s from "./Text.module.css";

function Text({ color, text }) {
  return color === "white" ? (
    <p className={s.textWhite}>{text}</p>
  ) : (
    <p className={s.text}>{text}</p>
  );
}

export default Text;
