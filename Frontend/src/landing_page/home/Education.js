import React, { useEffect } from "react";
import "./Education.css";

function Education() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => {
      el.classList.add("visible");
    });
  }, []);

  return (
    <section className="education-section">
      <div className="container py-5  border-top">
        <div className="text-center fade-up mb-5">
          <h2 className="display-5 fw-bold mb-3">
            Learning Simplified with Stoxure
          </h2>
          <p className="fs-5 text-muted">
            Explore the stock market safely, understand how news moves prices,
            and build your investing skills—all without risking real money.
          </p>
        </div>

        <div className="row g-4 fade-up">
<div className="col-12 col-md-4">
  <div className="education-card p-4 h-100 text-center">
    <i className="bi bi-book fs-1 mb-3"></i>
    <h5 className="fw-bold mb-2">Market Basics</h5>
    <p className="text-muted">
      Discover how stocks work, what drives prices, and how you can start exploring investing safely.
    </p>
  </div>
</div>


          <div className="col-12 col-md-4">
            <div className="education-card p-4 h-100 text-center">
              <i className="bi bi-bar-chart-line fs-1 mb-3"></i>
              <h5 className="fw-bold mb-2">Hands-On Practice</h5>
              <p className="text-muted">
                Simulate real trades, watch your virtual portfolio, and
                understand how the markets behave.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="education-card p-4 h-100 text-center">
              <i className="bi bi-newspaper fs-1 mb-3"></i>
              <h5 className="fw-bold mb-2">Real News Insights</h5>
              <p className="text-muted">
                See how global news and events connect to market moves and your
                simulated trades.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
