import s from "./Footer.module.css";
import sprite from "../../images/icons/sprites.svg";
import IconsItem from "../IconsItem/IconsItem";

function Footer() {
  return (
    <div className={s.container}>
      <IconsItem />
      <p className={s.text}>Copyright © 2021 - FinanceLedger</p>
    </div>
  );
}

export default Footer;
