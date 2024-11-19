import React from "react";
import { motion } from "framer-motion";
import { aboutus1, illustration1, illustration2, quote } from "../../img";
import "./Service.css";
import { FaAmbulance, FaHourglass, FaLeaf, FaWalking } from "react-icons/fa";
import { CiMonitor } from "react-icons/ci";
import { MdCleaningServices, MdOutlineCleaningServices } from "react-icons/md";
import { LuHelpingHand } from "react-icons/lu";
import { TiTime } from "react-icons/ti";
import { BiLeaf, BiWalk } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { FaPersonWalking } from "react-icons/fa6";
import { BsPersonWalking } from "react-icons/bs";
import { LiaWalkingSolid } from "react-icons/lia";
import { GiAmbulance, GiWalk, GiWalkingScout } from "react-icons/gi";
import { PiAmbulance } from "react-icons/pi";

const Service = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      className="services"
    >
      <div className="header-img">
        <img src={aboutus1} alt="" />
        <h1>
          <span>Our Servi</span>ces
        </h1>
      </div>

      <div className="our-services">
        <div className="first-service">
          <h2>
            <img src={quote} alt="" /> Comprehensive Care for your Loved Ones
          </h2>
          <p>
            At Saint Gabriel Adult Family Home, we offer a wide range of
            services to ensure the comfort, health, and happiness of our
            residents
          </p>
        </div>

        <div className="second-service">
          <div className="left">
            <h3>
              <TiTime /> 24/7 RN-certified Care and Supervision
            </h3>
            <p>
              Our skilled staff provides round-the-clock care, ensuring the
              safety and well-being of all residents
            </p>
            <h3>
              <BiLeaf /> Nutritious, Home-cooked Meals and Snacks
            </h3>
            <p>
              We serve delicious, balanced meals tailored to individual dietary
              needs and preferences.
            </p>
            <h3>
              <FiMonitor /> Medication Management and Health Monitoring
            </h3>
            <p>
              Our trained staff oversees medication administration and monitors
              residents' health conditions.
            </p>
          </div>
          <div className="right">
            <img src={illustration1} alt="" />
          </div>
        </div>

        <div className="third-service">
          <div className="left">
            <img src={illustration2} alt="" />
          </div>
          <div className="right">
            <h3>
              <LuHelpingHand /> Assistance with Daily Living Activities
            </h3>
            <p>
              Our skilled staff provides round-the-clock care, ensuring the
              safety and well-being of all residents
            </p>
            <h3>
              <MdOutlineCleaningServices /> Housekeeping and Laundry Services
            </h3>
            <p>
              We maintain a clean, comfortable living environment and provide
              regular laundry service.
            </p>
            <h3>
              <BiWalk /> Engaging Social Activities and Outings
            </h3>
            <p>
              We offer a variety of activities to keep residents active,
              engaged, and connected with others.
            </p>
            <h3>
              <PiAmbulance /> Medication Management and Health Monitoring
            </h3>
            <p>
              We coordinate and provide transportation for residents' healthcare
              needs.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Service;
