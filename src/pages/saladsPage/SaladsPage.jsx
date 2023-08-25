import React from "react";
import { salads } from "./salads.js";
import ProductDescription from "../../components/productDescription/ProductDescription";
import "../../components/productDescription/productDescription.style.css";
import NavBar from "../../components/navigation/NavBar.jsx";
import Footer from "../../components/footer/Footer.jsx";

const SaladsPage = () => {
  return (
    <div className="product-description__container">
      <NavBar></NavBar>
      {salads.map((el, index) => {
        return (
          <ProductDescription
            img={el.img}
            index={index}
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

export default SaladsPage;
