import React from "react";
import { footerBg, logo, underline } from "../../img";
import {
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <img src={footerBg} alt="background" className="footer-bg" />
      <div className="footer-main">
        <div className="social-links">
          <img src={logo} alt="" />
          <p>
            Our dedicated RN-certified staff ensures <br />
            personalized attention and support for each
            <br /> resident, helping them maintain dignity,
            <br />
            independence, and quality of life{" "}
          </p>
          <div className="social">
            <a href="https://facebook.com" target="_blank">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank">
              <FaInstagram />
            </a>
          </div>
        </div>
        <div className="home-links">
          <h2>Our Links</h2>
          <img src={underline} alt="" />
          <ul>
            <li>
              <Link to="/">
                <FaChevronRight />
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                <FaChevronRight />
                About Us
              </Link>
            </li>
            <li>
              <Link to="/our-services">
                <FaChevronRight />
                Services
              </Link>
            </li>
            <li>
              <Link to="/gallery">
                <FaChevronRight />
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/certificates">
                <FaChevronRight />
                Certificate
              </Link>
            </li>
          </ul>
        </div>
        <div className="contact-us">
          <h2>Contact Us</h2>
          <img src={underline} alt="" />
          <ul>
            <li>
              <a href="tel:214-603-2783">
                <FaPhone />
                214-603-2783
              </a>
            </li>
            <li>
              <a href="tel:+251911212103">
                <FaPhone />
                +2519 11 21 21 03
              </a>
            </li>
            <li>
              <a href="mailto:info@saintgabrielnursinghome.com">
                <FaMailBulk />
                info@saintgabrielnursinghome.com
              </a>
            </li>
            <li>
              <a
                href="https://maps.app.goo.gl/Pz1zPvAGDu9d7357A"
                target="_blank"
              >
                <FaLocationDot />
                5406 30th Ave S, Seattle, WA 98108
              </a>
            </li>

            <li>
              <a>
                <FaLocationDot />
                Addis Ababa, Ethiopia
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>
          &copy; 2024 St Gabriel Nursing Home | Powered by{" "}
          <a href="https://cepheusx.com" target="_blank">
            CepheusX
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
