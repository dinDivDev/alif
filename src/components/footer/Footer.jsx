import React from "react";
import instagram from "./assets/insta.svg";
import whatsapp from "./assets/whatsapp.svg";
import "./footer.style.css";

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer__social-icons">
        <a
          href="https://www.instagram.com/detail_mann/?igshid=MzRlODBiNWFlZA%3D%3D&fbclid=IwAR1Y3NUJ8GGLNc2Cx3ieel0s48znO_05xsU76ubIJ_KXrD6t6KiqPMAUN7c"
          target="_blank"
          rel="noreferrer"
        >
          <img src={instagram} alt="instagram link" />
        </a>
        <a href="https://wa.me/+1773-685-1818" target="_blank" rel="noreferrer">
          <img src={whatsapp} alt="whatsapp link" />
        </a>
      </div>
      <h2>
        Cafe<span> Alif</span>
      </h2>
      <br />
      <h2>
        <span> (773) 685-1818</span>
      </h2>
      <br />
      <p>2245 W Devon Ave, Chicago, IL 60659</p>
      <br />
      <p>© Copyright {date} All rights reserved by Cafe Alif. </p>
    </div>
  );
};

export default Footer;
