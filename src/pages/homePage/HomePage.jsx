import React from "react";
import Menu from "../../components/menu/Menu";
import logo from "./assets/IMG_1829.JPG";
import NavBar from "../../components/navigation/NavBar";
import Footer from "../../components/footer/Footer.jsx";
import { menuList } from "./menuList";
import "./homePage.style.css";

const HomePage = () => {
  return (
    <div className="our-menu__menu-list">
      <NavBar></NavBar>
      <div className="our-menu__main-box">
        <div className="our-menu__container">
          {menuList.map((el, index) => (
            <Menu
              url={el.url}
              key={index}
              img={el.img}
              alt={el.alt}
              text={el.text}
            />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default HomePage;
