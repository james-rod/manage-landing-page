import { useState } from "react";
import LogoImg from "./images/logo.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareFacebook,
  faYoutube,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { checkEmail } from "./validator";

import "./Footer.css";

export function Footer() {
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const emailResult = checkEmail(email);
    setErrorEmail(emailResult);
  }

  return (
    <div className="footer-container">
      <div className="top-footer-container">
        <h1 className="footer-title">Simplify how your team works today.</h1>
        <button className="footer-Started-btn ">Get Started</button>
      </div>

      <div className="bottom-footer-container">
        <p className="reserved-text">Copyright 2024. All Rights Reserved</p>

        <div className="title-icons i">
          <img src={LogoImg} alt="LogoImg" className="logo-Image" />

          <div className="icon-container">
            <FontAwesomeIcon className="fa-icon" icon={faSquareFacebook} />
            <FontAwesomeIcon className="fa-icon" icon={faYoutube} />
            <FontAwesomeIcon className="fa-icon" icon={faTwitter} />
            <FontAwesomeIcon className="fa-icon" icon={faPinterest} />
            <FontAwesomeIcon className="fa-icon" icon={faInstagram} />
          </div>
        </div>

        <div className="footer-nav-links">
          <ul>
            <li>Home</li>
            <li>Pricing</li>
            <li>Product</li>
            <li>About Us</li>
          </ul>

          <ul>
            <li>Careers</li>
            <li>Community</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <div
            className={`input-Container ${
              errorEmail.length > 0 ? "error" : ""
            }`}
          >
            <input
              type="email"
              placeholder="Updates in your inbox..."
              className="emailInput"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errorEmail && <div className="error-msg">{errorEmail}</div>}
            <button className="go-button">Go</button>
          </div>
          <p className="desktop-reserved-text">
            Copyright 2024. All Rights Reserved
          </p>
        </form>
      </div>
    </div>
  );
}
