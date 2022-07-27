import Button from "../../Components/Button/Button";
import s from "./HomePage.module.css";

function HomePage() {
  return (
    <div className={s.container}>
      <h2 className={s.title}>
        The Sky Is
        <br /> The Limit
      </h2>
      <p className={s.text}>We provide world class financial assistance</p>
      <div className={s.containerButton}>
        <Button text="Read More" />
      </div>
    </div>
  );
}

export default HomePage;
