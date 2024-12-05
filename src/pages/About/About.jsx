import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import { aboutus1, aboutus2, oldPerson } from "../../img";
import { FounderMessage, Testimonial } from "../../container";

const About = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      className="about-us"
    >
      <div className="about-first-page">
        <h1>
          <span>About</span> Us
        </h1>
        <div className="about-page">
          <img src={aboutus1} alt="" />
          <p>
            At Saint Gabriel Adult Family Home, we provide exceptional care in a
            nurturing, family-like environment. Our dedicated RN-certified staff
            ensures personalized attention and support for each resident,
            helping them maintain dignity, independence, and quality of life.
          </p>
        </div>
        <div className="about-page">
          <p>
            <h3>Our Mission</h3>
            Saint Gabriel Adult Family Home is dedicated to providing
            exceptional care for seniors in the Seattle and Seatac areas. We
            believe in creating a nurturing environment where residents feel at
            home, supported, and valued.
          </p>
          <img src={aboutus2} alt="" />
        </div>
      </div>

      <div className="about-second-page">
        <img src={oldPerson} alt="" className="old-img" />
        <div>
          <p>
            <h3>Our Approach</h3>
            We understand that each resident has unique needs and preferences.
            Our RN-certified staff works closely with residents and their
            families to develop personalized care plans that promote
            independence, dignity, and a high quality of life.
          </p>
          <p>
            <h3>Our Team</h3>
            Our compassionate team of RN-certified caregivers is committed to
            providing round-the-clock care and support. We treat each resident
            as a member of our own family, ensuring they receive the attention
            and respect they deserve.
          </p>
        </div>
      </div>
      <FounderMessage />
      <Testimonial />
    </motion.div>
  );
};

export default About;
