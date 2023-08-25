import { useState } from "react";
import React from "react";
import { entrees } from "./entrees.js";
import Footer from "../../components/footer/Footer.jsx";
import ProductDescription from "../../components/productDescription/ProductDescription";
import "../../components/productDescription/productDescription.style.css";
import NavBar from "../../components/navigation/NavBar.jsx";

const EntreesPage = () => {
  const [quantityValue, setQuantityValue] = useState([...entrees]);

  const onIncrementHandler = (index) => {
    const updatedQty = [...quantityValue];
    updatedQty[index].qty += 1;
    setQuantityValue(updatedQty);
  };

  const onDecrementHandler = (index) => {
    const updatedQty = [...quantityValue];

    if (updatedQty[index].qty !== 0) {
      updatedQty[index].qty -= 1;
      setQuantityValue(updatedQty);
    }
  };

  return (
    <div className="product-description__container">
      <NavBar></NavBar>
      {entrees.map((el, index) => {
        return (
          <ProductDescription
            img={el.img}
            index={index}
            // description={el.description}
            onDecrementHandler={() => onDecrementHandler(index)}
            onIncrementHandler={() => onIncrementHandler(index)}
            ingredients={el.ingredients}
            qty={el.qty}
            price={el.price}
            name={el.name}
          />
        );
      })}
      <Footer></Footer>
    </div>
  );
};

export default EntreesPage;
