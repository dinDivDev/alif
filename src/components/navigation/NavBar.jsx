import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/alif.jpg";
import "./navBar.style.css";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const onClickOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div className="navbar">
      <ul className="navbar__options">
        <Link to="/home" className="navbar__logo__container">
          <img
            rel="preload"
            src={logo}
            className="navbar__logo"
            alt="detailmann logo"
          />
        </Link>

        <Link to="/menu">
          <li>Menu</li>
        </Link>
        <Link to="/contactus">
          <li>Contact Us</li>
        </Link>
        <Link to="/location">
          <li>Find Us</li>
        </Link>
      </ul>
      <div className="navbar-drawer">
        <button className="navbar-drawer__button" onClick={onClickOpenMenu}>
          ≡
        </button>
        {openMenu && (
          <ul className="navbar-drawer__options">
            <Link to="/menu">
              <li>Menu</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
            <Link to="/location">
              <li>Find Us</li>
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
