import React, { useEffect } from "react";
import "./Hero.css";

function Hero() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => {
      el.classList.add("visible");
    });
  }, []);

  const handleScroll = () => {
    const element = document.getElementById("start");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero-section py-5">
      <div className="container">
        <div className="row align-items-center">

          {/* Image */}
          <div className="col-12 col-md-6 text-center mb-4 mb-md-0 fade-up">
            <img
              src="homeHero.png"
              alt="Stoxure Hero"
              className="img-fluid"
            />
          </div>

          {/* Text */}
          <div className="col-12 col-md-6 text-center text-md-start fade-up">
            <h1 className="display-4 fw-bold mb-3">
              Simulate. Learn. Grow.
            </h1>
            <p className="lead mb-4">
              Build your investing confidence one click at a time. Stoxure is a
              beginner-friendly platform where students learn the stock market
              through real-world news, interactive lessons, and safe simulations.
            </p>
            <button
              className="btn-stoxure btn-stoxure-lg"
              onClick={handleScroll}
            >
              Start Learning
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
