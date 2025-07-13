import React from "react";

import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

function ProductsPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="DashboardImg.png"
        productName="Stoxure Dashboard"
        productDesription="Your central hub showing market charts, quick portfolio summaries, and key insights—all designed to give you a snapshot of your simulated trading performance in one glance."
      />
      <RightSection
        imageURL="OrdersImg.png"
        productName="Orders"
        productDesription="Review all your simulated trades in one place. Check order history, prices, quantities, and timestamps to analyze how your trading decisions played out over time."
      />
      <LeftSection
        imageURL="HoldingsImg.png"
        productName="Holdings"
        productDesription="See a detailed list of your current simulated stock holdings. Track live prices, quantities, average buy prices, and unrealized P&L to understand your portfolio's health."
      />
      <RightSection
        imageURL="FundsImg.png"
        productName="Funds"
        productDesription="Monitor your simulated cash balance, margin usage, and total account value. Manage how you allocate funds for new trades and keep your virtual trading journey under control."
      />
      <p className="text-center mt-5 mb-5">
        Want to learn more about how Stoxure works? Explore our platform and start your journey into markets—risk free.
      </p>
    </>
  );
}

export default ProductsPage;
