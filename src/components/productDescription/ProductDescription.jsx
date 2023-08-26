import React, { useState, useEffect } from "react";
import Modal from "../modal/Modal";
// import EntreesPage from "../../pages/entreesPage/EntreesPage";
// import cart from "../../assets/Shopping_cart_icon.svg.jpg";

import NavBar from "../../components/navigation/NavBar";
// import "./mainLadningPage.style.css";
import Footer from "../../components/footer/Footer";
const ProductDescription = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  return (
    <div>
      <div className="product-description__sub-container">
        <img
          className="product-description__image"
          src={props.img}
          loading="lazy"
        ></img>

        <div className="product-description__price-info">
          <p className="product-price">{props.price}</p>
        </div>

        <div className="product-description__info">
          <div className="product-description__name-info">
            <p className="product-name">{props.name}</p>
            <button onClick={() => setIsOpen(true)}>View description</button>
          </div>
        </div>
        {/* <div key={props.index} className="product-description__quantity-box">
          <button className="decrement" onClick={props.onDecrementHandler}>
            -
          </button>
          <p className="qty">{props.qty}</p>
          <button className="increment" onClick={props.onIncrementHandler}>
            +
          </button>
        </div> */}

        {/* <div className="product-description__modal">
          <a onClick={() => setIsOpen(true)}>View ingredients</a>
        </div> */}
        {isOpen && (
          <Modal
            className="modaloverlay"
            onClose={() => setIsOpen(false)}
            ingredients={props.ingredients}
            description={props.description}
            boxClassName="product-description__product-modal"
          />
        )}

        {/* <div>
          <button className="product-description__add-to-cart">Order</button>
        </div> */}
      </div>
    </div>
  );
};

export default ProductDescription;
