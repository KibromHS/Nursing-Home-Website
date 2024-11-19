import React from "react";
import { About, Contact, Main, Our, Testimonial } from "../../container";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div initial={{ width: 0 }} animate={{ width: "100%" }}>
      <Main />
      <About />
      <Our />
      <Testimonial />
    </motion.div>
  );
};

export default Home;
