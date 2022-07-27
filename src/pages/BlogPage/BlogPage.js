import Preface from "../../Components/Preface/Preface";
import Title from "../../Components/Title/Title";
import Text from "../../Components/Text/Text";
import s from "./BlogPage.module.css";

function BlogPage() {
  return (
    <div className={s.conntainer}>
      <Preface color="white" text="April 16 2020" />
      <Title color="white" text="Blog Post One" />
      <Text
        color="white"
        text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate, ipsum dignissimos quae laudantium asperiores nam aliquid impedit harum illum dolore explicabo ab dolores itaque rerum temporibus doloribus iste maiores deleniti?"
      />
    </div>
  );
}

export default BlogPage;
