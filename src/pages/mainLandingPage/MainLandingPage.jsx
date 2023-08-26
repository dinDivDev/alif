import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import lagmanVideo from "./assets/lagmanVideo.mp4";
import NavBar from "../../components/navigation/NavBar";
import "./mainLadningPage.style.css";
import Footer from "../../components/footer/Footer";

const MainLandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavBar></NavBar>
      <div>
        <Link to="/">
          <div className="overlay"></div>
          <div className="home-page__video">
            <video src={lagmanVideo} autoPlay loop muted></video>
            <div className="content">
              <h1>
                Welcome to <span>Cafe Alif</span>
              </h1>
            </div>
          </div>
        </Link>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainLandingPage;
