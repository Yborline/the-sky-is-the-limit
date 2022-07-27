import Title from "../../Components/Title/Title";
import Text from "../../Components/Text/Text";
import Preface from "../../Components/Preface/Preface";
import ListImg from "../../Components/ListImg/ListImg";
import s from "./CasesPage.module.css";

function CasesPage() {
  return (
    <div className={s.container}>
      <Preface text="This is what we do" />
      <Title text="Business Cases" />
      <Text
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
        sapiente!"
      />
      <ListImg />
    </div>
  );
}

export default CasesPage;
