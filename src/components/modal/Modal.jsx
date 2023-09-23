import React from "react";
import halalLogo from "../../assets/halalLogo.png";
import "./modal.style.css";

const Modal = ({
  boxClassName,
  className,
  ingredients,
  description,
  onClose,
}) => {
  const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  };

  const MODAL_STYLES_TEXT = {
    textTransform: "uppercase",
    textDecoration: "underline",
    fontSize: "27px",
  };

  return (
    <>
      <div style={OVERLAY_STYLES}>
        <div className={className}>
          <div className={boxClassName}>
            <p style={MODAL_STYLES_TEXT}>Description</p>
            <p>{description}</p>
            <br></br>
            <p style={MODAL_STYLES_TEXT}>Ingredient</p>
            <p> {ingredients}</p>
            <img className="halal_logo" src={halalLogo} />
            <button className="close-btn" onClick={onClose}>
              ✖️
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
