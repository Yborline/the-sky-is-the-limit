import s from "./Preface.module.css";

function Preface({ color, text }) {
  return color === "white" ? (
    <p className={s.prefaceWhite}>{text}</p>
  ) : (
    <p className={s.preface}>{text}</p>
  );
}

export default Preface;
