import React from "react";
import Navbar from "../landing_page/Navbar";
import Footer from "../landing_page/Footer";
import { Outlet } from "react-router-dom";

const FrontendLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default FrontendLayout;
