import s from "../Modal/Modal.module.css";
import { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";

const modalRoot = document.querySelector("#modal-root");

function Modal({ onClose, alt, largeImage }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.code === "Escape") {
      onClose();
    }
  };
  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={handleBackdropClick} className={s.Overlay}>
      <div className={s.container}>
        <p className={s.close} onClick={onClose}>
          ❌
        </p>
        <img className={s.Modal} alt={alt} src={largeImage}></img>
        <p className={s.text}>{alt}</p>
      </div>
    </div>,
    modalRoot
  );
}

export default Modal;
