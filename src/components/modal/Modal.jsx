import React from "react";
import "./modal.style.css";

const Modal = ({ boxClassName, className, ingredients, onClose }) => {
  const OVERLAY_STYLES = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  };

  return (
    <>
      <div style={OVERLAY_STYLES}>
        <div className={className}>
          <div className={boxClassName}>
            <p>{ingredients}</p>
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
