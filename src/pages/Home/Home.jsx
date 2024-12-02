import React from "react";
import {
  About,
  FounderMessage,
  Gallery,
  Main,
  Our,
  Testimonial,
} from "../../container";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}>
      <Main />
      <About />
      <Our />
      <FounderMessage />
      <Gallery />
      <Testimonial />
    </motion.div>
  );
};

export default Home;
