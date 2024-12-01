import React, { useState, useEffect } from "react";
import logo from "../../img/image.png";
import { FaPhone } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      setShowNavbar(false); // Hide navbar on scroll down
    } else {
      setShowNavbar(true); // Show navbar on scroll up
    }

    setLastScrollTop(scrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  const handleOpenMenu = () => {
    document.getElementsByClassName(
      "app__navbar-menu-container"
    )[0].style.marginRight = 0;
    document.getElementsByClassName(
      "app__navbar-menu-container"
    )[0].style.opacity = 1;
  };

  const handleCloseMenu = () => {
    document.getElementsByClassName(
      "app__navbar-menu-container"
    )[0].style.marginRight = "-500px";
    document.getElementsByClassName(
      "app__navbar-menu-container"
    )[0].style.opacity = 0;
  };

  return (
    <nav className="app__navbar">
      <a href="./" className="app__navbar-logo">
        <img src={logo} alt="logo" />
      </a>

      <ul className="app__navbar-links">
        <li className="app__flex p-text">
          <Link to="/">Home</Link>
          <div />
        </li>
        <li className="app__flex p-text">
          <Link to="/about">About Us</Link>
          <div />
        </li>
        <li className="app__flex p-text">
          <Link to="/our-services">Services</Link>
          <div />
        </li>
        <li className="app__flex p-text">
          <Link to="/gallery">Gallery</Link>
          <div />
        </li>
        <li className="app__flex p-text">
          <Link to="/certificates">Certificate</Link>
          <div />
        </li>
        <li className="contact-link app__flex p-text">
          <a href="#contact">Contact Us</a>
          <FaPhone className="phone-icon" />
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenu onClick={handleOpenMenu} />

        <div className="app__navbar-menu-container">
          <HiX onClick={handleCloseMenu} />
          <ul>
            <li>
              <Link to="/" onClick={handleCloseMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={handleCloseMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/our-services" onClick={handleCloseMenu}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={handleCloseMenu}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/certificates" onClick={handleCloseMenu}>
                Certificate
              </Link>
            </li>
            <li className="contact-link">
              <a href="#contact" onClick={handleCloseMenu}>
                Contact Us
              </a>
              <FaPhone className="phone-icon" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
