import img1 from "../../images/image/Cases1.jpg";
import img2 from "../../images/image/Cases2.jpg";
import img3 from "../../images/image/Cases3.jpg";
import img4 from "../../images/image/Cases4.jpg";
import img5 from "../../images/image/Cases5.jpg";
import img6 from "../../images/image/Cases6.jpg";
import largeImg from "../../images/image/Casesx2(1).jpg";
import largeImg2 from "../../images/image/Cases2x(2).jpg";
import largeImg3 from "../../images/image/Cases2x(3).jpg";
import largeImg4 from "../../images/image/Cases2x(4).jpg";
import largeImg5 from "../../images/image/Cases2x(5).jpg";
import largeImg6 from "../../images/image/Cases2x(6).jpg";
import ImgLi from "../ImgLi/ImgLi";
import Modal from "../../Components/Modal/Modal";

import { useState } from "react";

function ListImg() {
  const [showModal, setShowModal] = useState(false);
  const [img, setImage] = useState("");
  //   const [largeImage, setLargeImage] = useState("");
  const image = (x) => {
    switch (x) {
      case "/static/media/Cases1.bb8abddb48f4f560107f.jpg":
        return largeImg;
      case "/static/media/Cases2.8685d4b7cd5642874ea4.jpg":
        return largeImg2;
      case "/static/media/Cases3.560df9007e9cf116aacc.jpg":
        return largeImg3;
      case "/static/media/Cases4.1303c50d4e2d5d0ab682.jpg":
        return largeImg4;
      case "/static/media/Cases5.b2c8bb07694043105ac3.jpg":
        return largeImg5;
      case "/static/media/Cases6.883432f39b2d8b0ecc7a.jpg":
        return largeImg6;

      default:
        alert("1");
    }
  };

  const closeModal = () => {
    setShowModal((showModal) => !showModal);
    setShowModal("");
    setImage("");
  };

  const openModal = (img) => {
    setShowModal((showModal) => !showModal);
    setImage(img);
  };
  return (
    <>
      <ul>
        <ImgLi open={() => openModal(img1)} img={img1} alt="asdad" />
        <ImgLi open={() => openModal(img2)} img={img2} alt="asdad" />
        <ImgLi open={() => openModal(img3)} img={img3} alt="asdad" />
        <ImgLi open={() => openModal(img4)} img={img4} alt="asdad" />
        <ImgLi open={() => openModal(img5)} img={img5} alt="asdad" />
        <ImgLi open={() => openModal(img6)} img={img6} alt="asdad" />
      </ul>
      {showModal && (
        <Modal onClose={closeModal} alt="123" largeImage={image(img)} />
      )}
    </>
  );
}

export default ListImg;
