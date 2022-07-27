import Preface from "../../Components/Preface/Preface";
import Title from "../../Components/Title/Title";
import Text from "../../Components/Text/Text";
import s from "./BlogPage.module.css";
import image from "../../images/image/Blog.jpg";
import { Link, NavLink } from "react-router-dom";

function BlogPage() {
  return (
    <div className={s.conntainer}>
      <img
        className={s.img}
        src={image}
        alt="Тетрадь ,книжка и чашка кофе на столе"
      />
      <div className={s.divText}>
        <Preface color="white" text="April 16 2020" />
        <Title color="white" text="Blog Post One" />
        <Text
          color="white"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?"
        />
        <Link to="/team">
          <button type="button" className={s.button}>
            Read Our Blog
          </button>
        </Link>
      </div>
    </div>
  );
}

export default BlogPage;
