import React from "react";
import "./Our.css";
import { FaMailBulk, FaPhone, FaRegCheckSquare } from "react-icons/fa";
import { FaMapLocationDot, FaRegCircle } from "react-icons/fa6";
import { home1, home2, aa } from "../../img";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Our = () => {
  return (
    <div className="our-homes" id="services">
      <h1>Our Homes</h1>
      <h3>Discover Our Two Welcoming Locations</h3>
      <div className="tabs">
        <div className="tab active" data-tab="seattle">
          <p>Seattle</p>
          <div />
        </div>
        <div className="tab" data-tab="addis-ababa">
          <p>Addis Ababa</p>
          <div />
        </div>
      </div>
      <motion.div
        className="cities"
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="tab-content active" id="seattle">
          <h1>Saint Gabriel Seattle</h1>
          <div className="first_home">
            <div className="left-part">
              <h2>Address 1</h2>
              <p>
                <Link
                  to="https://maps.app.goo.gl/Pz1zPvAGDu9d7357A"
                  target="_blank"
                >
                  <FaMapLocationDot /> 5406 30th Ave S, Seattle, WA 98108
                </Link>
              </p>
              <h2>Features</h2>
              <ul className="features">
                <li>
                  <FaRegCheckSquare /> Spacious, beautifully appointed rooms
                </li>
                <li>
                  <FaRegCheckSquare /> Inviting common areas for socializing and
                  relaxation
                </li>
                <li>
                  <FaRegCheckSquare /> Serene outdoor spaces with gardens and
                  seating
                </li>
              </ul>
            </div>

            <div className="right-part">
              <img src={home1} alt="" />
            </div>
          </div>

          <div className="second_home">
            <div className="right-part">
              <img src={home2} alt="" />
            </div>

            <div className="left-part">
              <h2>Address 2</h2>
              <p>
                <Link
                  to="https://maps.app.goo.gl/qgz6Ek8R8dJaqRFbA"
                  target="_blank"
                >
                  <FaMapLocationDot /> 2433 S 135th Street, Seattle, WA 98168
                </Link>
              </p>
              <h2>Features</h2>
              <ul className="features">
                <li>
                  <FaRegCheckSquare /> Elegant, comfortable accommodations
                </li>
                <li>
                  <FaRegCheckSquare /> Nutritious, home-cooked meals
                </li>
                <li>
                  <FaRegCheckSquare /> Engaging activities and outings
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="tab-content" id="addis-ababa">
          <div className="aa-image">
            <img src={aa} alt="" />
            <div className="addis-header">
              <h1>Golden Hope Adult Family Home</h1>
              <p>
                <a href="tel:+251911212103">
                  <FaPhone /> +2519 11 21 21 03
                </a>
              </p>
              <p>
                <a href="mailto:goldenhope@saintgabrielnursinghome.com">
                  <FaMailBulk />
                  goldenhope@saintgabrielnursinghome.com
                </a>
              </p>
              <p>
                <FaMapLocationDot /> Addis Ababa, Ethiopia
              </p>
            </div>

            <p>Coming Soon...</p>
            <div className="aa-bg"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Our;
