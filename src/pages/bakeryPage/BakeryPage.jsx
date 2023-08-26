import React from "react";
import { bakery } from "./bakery.js";
import Footer from "../../components/footer/Footer.jsx";
import ProductDescription from "../../components/productDescription/ProductDescription";
import "../../components/productDescription/productDescription.style.css";
import NavBar from "../../components/navigation/NavBar.jsx";

const BakeryPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="product-description__container">
        {bakery.map((el, index) => {
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
      </div>
      <Footer></Footer>
    </>
  );
};

export default BakeryPage;
