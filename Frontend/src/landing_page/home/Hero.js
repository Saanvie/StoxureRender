import React from "react";

function Hero() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <img
          src="/media/homeHero.svg"
          alt="Hero Image"
          className="mb-5"
           style={{ maxWidth: '400px', height: 'auto' }} 
        />
        <h1 className="mt-5">“Simulate. Learn. Grow. Build your investing confidence — one click at a time.”</h1>
        <p>
    Stoxure is a beginner-friendly platform where students learn the stock market through real-world news, lessons, and safe simulations.

        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Start Learning
        </button>
      </div>
    </div>
  );
}

export default Hero;