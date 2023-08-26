import React from "react";
import { breakfast } from "./breakfastData.js";
import Footer from "../../components/footer/Footer.jsx";
import ProductDescription from "../../components/productDescription/ProductDescription";
import "../../components/productDescription/productDescription.style.css";
import NavBar from "../../components/navigation/NavBar.jsx";

const BreakFastPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <div className="product-description__container">
        {breakfast.map((el, index) => {
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

export default BreakFastPage;
