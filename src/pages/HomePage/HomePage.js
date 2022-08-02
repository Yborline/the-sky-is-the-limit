import Button from "../../Components/Button/Button";
import s from "./HomePage.module.css";
import { Link } from "react-router-dom";

function HomePage({ id }) {
  return (
    <div id={id} className={s.container}>
      <h2 className={s.title}>The Sky Is The Limit</h2>
      <p className={s.text}>We provide world class financial assistance</p>
      <div className={s.containerButton}>
        <Link to="/about">
          <Button text="Read More" />
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
