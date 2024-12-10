import React from "react";
import "./FounderMessage.css";
import { founder, founderFooter, quote, signature } from "../../img";
import { motion } from "framer-motion";

const FounderMessage = () => {
  return (
    <motion.div
      className="founder"
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
    >
      <div className="founder-title">
        <h1>Message From Founder</h1>
        <hr />
      </div>
      <div className="founder-main">
        <img src={founder} alt="" className="founder" />
        <div className="founder-message">
          <img src={quote} alt="" />
          <p>
            At St. Gabriel Adult Family Home, we are dedicated to creating a
            warm, caring environment where seniors feel respected, supported,
            and at home. Our team is committed to providing exceptional care and
            meaningful experiences that enhance the well-being of our residents.{" "}
            <br />
            <br />
            Thank you for trusting us to care for your loved ones. We are
            honored to be part of their journey. <br />
            <br /> Warm regards,
          </p>
          <img src={signature} alt="" className="signature" />
        </div>
        <div className="line"></div>
      </div>
      <div className="founder-footer"></div>
    </motion.div>
  );
};

export default FounderMessage;
