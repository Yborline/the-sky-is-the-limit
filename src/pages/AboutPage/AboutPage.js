import Button from "../../Components/Button/Button";
import Title from "../../Components/Title/Title";
import Text from "../../Components/Text/Text";
import Preface from "../../Components/Preface/Preface";
import s from "./AboutPage.module.css";
import { Link } from "react-router-dom";

function AboutPage({ id }) {
  return (
    <div id={id} className={s.container}>
      <div className={s.divImg}></div>
      <div className={s.divText}>
        <Preface color="white" text="What you are looking for" />
        <Title color="text" text="We provide bespoke solutions" />
        <Text
          color="white"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate,
          ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum
          illum dolore explicabo ab dolores itaque rerum temporibus doloribus
          iste maiores deleniti?"
        />
        <Link to="/cases">
          <Button border={true} text="Read More" />
        </Link>
      </div>
    </div>
  );
}

export default AboutPage;
