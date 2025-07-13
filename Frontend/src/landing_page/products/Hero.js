import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="product-hero border-bottom">
      <div className="container text-center py-5">
        <h1 className="fw-bold mb-3">Explore the Stoxure Dashboard</h1>
        <h3 className="text-muted mb-4">
Master the art of trading in a safe, interactive space designed for future investors.        
</h3>
        <a href="/dashboard" className="btn-stoxure btn-stoxure-lg">
          Try the Dashboard
        </a>
      </div>
    </section>
  );
}

export default Hero;
