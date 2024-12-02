import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AnimatedRoutes, Contact, Footer, Navbar } from "./container";
import ScrollToTop from "./ScrollToTop";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster />
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
