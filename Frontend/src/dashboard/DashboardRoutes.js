import React from "react";
import { Route } from "react-router-dom";
import Summary from "./components/Summary";
import Orders from "./components/Orders";
import Holdings from "./components/Holdings";

import Funds from "./components/Funds";
// import "./dashboard.css";

const dashboardRoutes = [
  <Route index element={<Summary />} key="index" />,
  <Route path="summary" element={<Summary />} key="summary" />,
  <Route path="orders" element={<Orders />} key="orders" />,
  <Route path="holdings" element={<Holdings />} key="holdings" />,
  <Route path="funds" element={<Funds />} key="funds" />,

];

export default dashboardRoutes;
