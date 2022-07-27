import s from "./Footer.module.css";
import sprite from "../../images/icons/sprites.svg";

function Footer() {
  return (
    <div className={s.container}>
      <ul className={s.listIcon}>
        <li className={s.item}>
          <a href="https://uk-ua.facebook.com/">
            <svg width="35" height="35">
              <use href={`${sprite}#facebook`}></use>
            </svg>
          </a>
        </li>
        <li className={s.item}>
          <a href="https://twitter.com/">
            <svg width="35" height="35">
              <use href={`${sprite}#twitter`}></use>
            </svg>
          </a>
        </li>
        <li className={s.item}>
          <a href="https://www.youtube.com/">
            <svg width="40" height="35">
              <use href={`${sprite}#youtube`}></use>
            </svg>
          </a>
        </li>
        <li className={s.item}>
          <a href="https://www.linkedin.com/">
            <svg width="31" height="35">
              <use href={`${sprite}#linkedin`}></use>
            </svg>
          </a>
        </li>
      </ul>
      <p className={s.text}>Copyright © 2021 - FinanceLedger</p>
    </div>
  );
}

export default Footer;
