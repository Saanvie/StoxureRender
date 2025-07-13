import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import NewsPage from "./landing_page/news/NewsPage";

import FrontendLayout from "./landing_page/FrontendLayout";

// Lazy-load dashboard layout and all dashboard pages
const Layout = lazy(() => import("./dashboard/components/Layout"));
const Summary = lazy(() => import("./dashboard/components/Summary"));
const Orders = lazy(() => import("./dashboard/components/Orders"));
const Holdings = lazy(() => import("./dashboard/components/Holdings"));
const Funds = lazy(() => import("./dashboard/components/Funds"));


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Frontend Layout */}
        <Route path="/" element={<FrontendLayout />}>
          <Route index element={<HomePage />} />
          <Route path="signup" element={<Signup />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="product" element={<ProductPage />} />
          <Route path="news" element={<NewsPage />} />
        </Route>

        {/* Dashboard Layout */}
        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Navigate to="summary" replace />} />
          <Route path="summary" element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="funds" element={<Funds />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);
