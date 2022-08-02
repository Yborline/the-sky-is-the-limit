import Preface from "../../Components/Preface/Preface";
import Title from "../../Components/Title/Title";
import Text from "../../Components/Text/Text";
import s from "./BlogPage.module.css";

function BlogPage({ id }) {
  return (
    <div id={id} className={s.conntainer}>
      <div className={s.img}></div>
      <div className={s.divText}>
        <Preface color="white" text="April 16 2020" />
        <Title color="white" text="Blog Post One" />
        <Text
          color="white"
          text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?"
        />
        <button type="button" className={s.button}>
          Read Our Blog
        </button>
      </div>
    </div>
  );
}

export default BlogPage;
