import React from "react";
import { quote } from "../../img";
import "./Mskr.css";

const Mskr = ({ message, img, name, profession, style }) => {
  return (
    <div className="mskr" style={style}>
      <p className="message">{message}</p>
      <img src={quote} alt="quote" className="quote" />
      <div className="person">
        <img src={img} alt="person" className="profile" />
        <div className="profile-desc">
          <h3>{name}</h3>
          <p>{profession}</p>
        </div>
      </div>
    </div>
  );
};

export default Mskr;
