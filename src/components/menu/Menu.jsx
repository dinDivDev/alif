import React from "react";
import { Link } from "react-router-dom";
import "./menu.style.css";
import NavBar from "../navigation/NavBar";

const Menu = (props) => {
  return (
    <div className="our-menu__sub-container">
      <Link to={props.url}>
        <img src={props.img} alt={props.alt}></img>
        <div className="our-menu__text-background">
          <p>{props.text}</p>
        </div>
      </Link>
    </div>
  );
};

export default Menu;
