import s from "./IconsItem.module.css";
import sprite from "../../images/icons/sprites.svg";

function IconsItem({ color }) {
  return (
    <>
      <ul className={s.listIcon}>
        <li className={s.item}>
          <a href="https://uk-ua.facebook.com/">
            <svg
              className={color === "white" ? s.svgWhite : s.svg}
              width="35"
              height="35"
            >
              <use href={`${sprite}#facebook`}></use>
            </svg>
          </a>
        </li>
        <li className={s.item}>
          <a href="https://twitter.com/">
            <svg
              className={color === "white" ? s.svgWhite : s.svg}
              width="35"
              height="35"
            >
              <use href={`${sprite}#twitter`}></use>
            </svg>
          </a>
        </li>
        <li className={s.item}>
          <a href="https://www.youtube.com/">
            <svg
              className={color === "white" ? s.svgWhite : s.svg}
              width="40"
              height="35"
            >
              <use href={`${sprite}#youtube`}></use>
            </svg>
          </a>
        </li>
        <li className={s.item}>
          <a href="https://www.linkedin.com/">
            <svg
              className={color === "white" ? s.svgWhite : s.svg}
              width="31"
              height="35"
            >
              <use href={`${sprite}#linkedin`}></use>
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
}

export default IconsItem;
