import React from "react";
import { Link } from "react-scroll";
import { FaBars } from "react-icons/fa";

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo">
          <img
            src="https://admin.naxa.com.np/media/pics/Services-icon3_wqCud6l.svg"
            alt="logo"
            id="home"
          />
        </div>
        <FaBars className="navBar" />
        <ul>
          <li>
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true}>
              About
            </Link>
          </li>
          <li>
            <Link to="service" spy={true} smooth={true}>
              Service
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
