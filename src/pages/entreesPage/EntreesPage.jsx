import { useEffect, useState } from "react";
import React from "react";
import { entrees } from "./entrees.js";
import Footer from "../../components/footer/Footer.jsx";
import ProductDescription from "../../components/productDescription/ProductDescription";
import "../../components/productDescription/productDescription.style.css";
import { db } from "../../firebase-config.js";
import {
  collection,
  doc,
  getDocs,
  addDoc,
  deleteDoc,
  setDoc,
} from "firebase/firestore/lite";
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

  const [dishList, setDishList] = useState([]);

  const getAllTodos = async () => {
    try {
      const todosCollections = collection(db, "dishes");
      const todosSnapshot = await getDocs(todosCollections);
      const dishList = todosSnapshot.docs.map((el) => {
        return { ...el.data(), id: el.id };
      });
      setDishList(dishList);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <>
      <NavBar></NavBar>

      <div className="product-description__container">
        {dishList.map((el, index) => {
          return (
            <ProductDescription
              img={el.image}
              index={index}
              description={el.description}
              onDecrementHandler={() => onDecrementHandler(index)}
              onIncrementHandler={() => onIncrementHandler(index)}
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

export default EntreesPage;
