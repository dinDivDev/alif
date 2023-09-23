import { React, useState } from "react";
import NavBar from "../navigation/NavBar";
import email from "./assets/email.png";
import location from "./assets/location.png";
import telephone from "./assets/telephone.png";
import lagmanVideo from "./assets/lagmanVideoTwo.mp4";
import bread from "./assets/bread.jpg";
import "./findUs.style.css";

const FindUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <NavBar></NavBar>
      <div className="find-us__root-container">
        <div>
          <img className="main-picture" src={bread} alt="bread-picture" />
        </div>
        <div className="find-us">
          <div className="find-us__map">
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2965.125056670517!2d-87.6893653!3d41.9975916!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd1ba1752a07b%3A0x74304c682c7c5c6e!2sCaf%C3%A9%20Alif!5e0!3m2!1sen!2sus!4v1694229383511!5m2!1sen!2sus"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="find-us__meet-us">
            <h2>Meet us</h2>
            <ul className="find-us__meet-us-info">
              <li className="phone">
                <img className="info-img" src={telephone} alt="phone-number" />
                <a className="find-us__meet-us-link" href="tel:+17736851818">
                  +17736851818
                </a>
              </li>
              <li className="mail">
                <img className="info-img" src={email} alt="email" />
                <a
                  className="find-us__meet-us-link"
                  href="mailto:cafealif@outlook.com"
                >
                  cafealif@outlook.com
                </a>
              </li>
              <li className="adr">
                <img className="info-img" src={location} alt="location" />
                <a
                  className="find-us__meet-us-link"
                  href="https://www.google.com/maps/place/Caf%C3%A9+Alif/@41.9975916,-87.6893653,17z/data=!3m1!4b1!4m16!1m9!3m8!1s0x880fd1ba1752a07b:0x74304c682c7c5c6e!2sCaf%C3%A9+Alif!8m2!3d41.9975876!4d-87.6867904!9m1!1b1!16s%2Fg%2F11lr36nnss!3m5!1s0x880fd1ba1752a07b:0x74304c682c7c5c6e!8m2!3d41.9975876!4d-87.6867904!16s%2Fg%2F11lr36nnss?entry=ttu"
                  target="_blank"
                >
                  2245 W Devon Ave, Chicago, IL 60659
                </a>
              </li>
            </ul>
          </div>

          <div className="find-us__contact-us">
            <h2>Contact us</h2>
            <form
              className="infoWrap"
              id="sendContact"
              action="https://formsubmit.co/cafealif@outlook.com"
              method="POST"
            >
              <div className="contact-us__text">
                Hello,
                <br></br>
                <br></br>My name is{" "}
                <input
                  type="text"
                  className="contactNameInpt"
                  placeholder="your name"
                  name="name"
                  value={formData.name}
                  onChange={onChangeHandler}
                />{" "}
                and my e-mail address is{" "}
                <input
                  type="text"
                  className="contactMailInpt"
                  placeholder="your email"
                  name="email"
                  value={formData.email}
                  onChange={onChangeHandler}
                />{" "}
                and I would like to discuss about{" "}
                <input
                  type="text"
                  className="contactProjectInpt"
                  placeholder="your event"
                  name="message"
                  value={formData.message}
                  onChange={onChangeHandler}
                />
                .
              </div>
              <button type="submit" className="submit-button">
                send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  );
};

export default FindUs;

// IlmiraEjeRana
