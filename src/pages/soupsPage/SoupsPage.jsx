import React from "react";
import { soups } from "./soups.js";
import ProductDescription from "../../components/productDescription/ProductDescription";
import "../../components/productDescription/productDescription.style.css";
import NavBar from "../../components/navigation/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";

const SoupsPage = () => {
  return (
    <div className="product-description__container">
      <NavBar></NavBar>
      {soups.map((el, index) => {
        return (
          <ProductDescription
            img={el.img}
            index={index}
            // description={el.description}
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

export default SoupsPage;
