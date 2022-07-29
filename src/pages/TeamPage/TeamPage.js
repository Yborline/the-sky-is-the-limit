import Title from "../../Components/Title/Title";
import Text from "../../Components/Text/Text";
import Preface from "../../Components/Preface/Preface";
import IconsItem from "../../Components/IconsItem/IconsItem";
import img1 from "../../images/image/Team3.jpg";
import img2 from "../../images/image/Team2.jpg";
import img3 from "../../images/image/Team1.jpg";
import s from "./TeamPage.module.css";
const TeamPage =() =>{
  return (
    <div className={s.container}>
      <Preface text="Who we are" />
      <Title text="Our Professional Team" />
      <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!" />
      <ul className={s.list}>
        <li className={s.item}>
          <div className={s.divBackground}>
            <img className={s.img} alt="A man in a suit" src={img1}></img>
            <div className={s.backgroundItem}>
              <IconsItem color="white" />
            </div>
          </div>
          <h4 className={s.name}>John Doe</h4>
          <p className={s.profession}>President</p>
        </li>
        <li className={s.item}>
          <div className={s.divBackground}>
            <img className={s.img} alt="Nice woman" src={img2}></img>
            <div className={s.backgroundItem}>
              <IconsItem color="white" />
            </div>
          </div>
          <h4 className={s.name}>Jane Doe</h4>
          <p className={s.profession}>Vice President</p>
        </li>
        <li className={s.item}>
          <div className={s.divBackground}>
            <img
              className={s.img}
              alt="A man drinks coffee and looks at the monitor"
              src={img3}
            ></img>
            <div className={s.backgroundItem}>
              <IconsItem color="white" />
            </div>
          </div>
          <h4 className={s.name}>Steve Smith</h4>
          <p className={s.profession}>VMarketing Head</p>
        </li>
      </ul>
    </div>
  );
}

export default TeamPage;
