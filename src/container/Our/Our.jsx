import React from "react";
import "./Our.css";
import { FaRegCheckSquare } from "react-icons/fa";
import { FaMapLocationDot, FaRegCircle } from "react-icons/fa6";
import { home1, home2, aa } from "../../img";

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
      <div className="cities">
        <div className="tab-content active" id="seattle">
          <h1>Saint Gabriel Seattle</h1>
          <div className="first_home">
            <div className="left-part">
              <h2>Address 1</h2>
              <p>
                <FaMapLocationDot /> 5406 30th Ave S, Seattle, WA 98108
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
                <FaMapLocationDot /> 2433 S 135th Street, Seattle, WA 98168{" "}
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
            <h1>Golden Hope Adult Family Home</h1>
            <p>Coming Soon...</p>
            <div className="aa-bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Our;
