import React from "react";
import { quote } from "../../img";
import "./Mskr.css";

const Mskr = ({ message, name, profession, style }) => {
  return (
    <div className="mskr" style={style}>
      <p className="message">{message}</p>
      <img src={quote} alt="quote" className="quote" />
      <div className="person">
        <div className="profile">{name[0]}</div>
        <div className="profile-desc">
          <h3>{name}</h3>
          <p>{profession}</p>
        </div>
      </div>
    </div>
  );
};

export default Mskr;
