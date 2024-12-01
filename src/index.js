import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes, Contact, Footer, Navbar } from "./container";
import ScrollToTop from "./ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Navbar />
        <AnimatedRoutes />
        <Contact />
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);
