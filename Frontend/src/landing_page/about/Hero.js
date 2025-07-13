import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="about-hero">
      <div className="container text-center py-5">
        <h1 className="fw-bold mb-3">Welcome to Stoxure</h1>
        <p className="fs-5 text-muted">
          Let’s make sense of the stock market together.
        </p>
      </div>
    </section>
  );
}

export default Hero;
