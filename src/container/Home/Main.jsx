import React from "react";
import "./Main.css";
import { nurses, dashed } from "../../img";

const Main = () => {
  return (
    <div className="home" id="home">
      <div className="wrapper">
        <div className="left-side">
          <h1>St. Gabriel</h1>
          <h1>
            Adult <span>Family Home</span>
          </h1>
          <p>
            Our dedicated RN-certified staff ensures personalized attention{" "}
            <br />
            and support for each resident, helping them maintain dignity, <br />
            independence, and quality of life.
          </p>
          <a href="#about" className="more-link">
            More About Us
          </a>
          {/* <img src={dashed} alt="" /> */}
        </div>
        <div className="right-side">
          <img src={nurses} alt="Nurses" />
        </div>
      </div>
    </div>
  );
};

export default Main;
