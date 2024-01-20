import { useState } from "react";
import LogoImage from "./images/logo.svg";
import HamburgerIcon from "./images/icon-hamburger.svg";
import HamburgerClose from "./images/icon-close.svg";
export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <img src={LogoImage} alt="manageLogo" />

        {/* Responsive Nav Modal */}
        <div className={`navbar-modal ${isOpen ? "navbar-modal-active" : ""}`}>
          <div className="nav-list">
            <ul>
              <a href="#">
                <li>Pricing</li>
              </a>
              <a href="#">
                <li>Product</li>
              </a>
              <a href="#">
                <li>About Us</li>
              </a>
              <a href="#">
                <li>Careers</li>
              </a>
              <a href="#">
                <li>Community</li>
              </a>
            </ul>
          </div>
        </div>
        {/* Grey Overlay */}
        {isOpen && <div className="overlay" onClick={toggleModal}></div>}

        {/* Hamburger Icon and X Icon */}
        <div className="nav-icon-containers">
          <img
            src={HamburgerIcon}
            alt="hamburgerIcon"
            className={`menu-btn ${isOpen ? "invisible" : ""}`}
            onClick={toggleModal}
          />
          <img
            src={HamburgerClose}
            alt="x"
            className={`close-btn ${isOpen ? "" : "invisible"} `}
            onClick={toggleModal}
          />
        </div>

        <button className="header-Started-btn ">Get Started</button>
      </nav>
    </header>
  );
}
