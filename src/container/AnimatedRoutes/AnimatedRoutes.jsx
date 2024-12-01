import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  PageNotFound,
  Home,
  About,
  Service,
  Gallery,
  Certificates,
} from "../../pages";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/our-services" element={<Service />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/certificates" element={<Certificates />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
