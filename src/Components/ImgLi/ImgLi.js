import s from "./ImgLi.module.css";

function ImgLi({ open, img, alt }) {
  return (
    <li className={s.li}>
      <img className={s.img} onClick={() => open(img)} src={img} alt="asdad" />
    </li>
  );
}

export default ImgLi;
