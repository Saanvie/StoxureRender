import React from "react";
import TopBar from "./TopBar";
import { Outlet } from "react-router-dom";
import { GeneralContextProvider } from "./GeneralContext";
import "../dashboard.css";

const Layout = () => {
  return (
    <GeneralContextProvider>
      <TopBar />
      <Outlet />
    </GeneralContextProvider>
  );
};

export default Layout;
