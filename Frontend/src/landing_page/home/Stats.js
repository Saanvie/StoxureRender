import React, { useEffect } from "react";
import "./Stats.css";

function Stats() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el) => {
      el.classList.add("visible");
    });
  }, []);

  return (
    <section className="stats-section">
      <div className="container py-5  border-top">
        <div className="row align-items-center">
        <div className="text-center mb-5 fade-up">
          <h2 className="fw-bold display-5">Trust Your Learning with Stoxure</h2>
        </div>
          {/* LEFT COLUMN - TEXT */}
          <div className="col-12 col-md-6 mb-5 mb-md-0 fade-up">
            <div className="stats-card">


              <h2 className="fs-4 fw-semibold">Simulated Trading. Real Confidence.</h2>
              <p className="text-muted">
                Practice buying and selling stocks in a safe environment, learning how markets work — without risking real money.
              </p>

              <h2 className="fs-4 fw-semibold">Stay Informed with Market News</h2>
              <p className="text-muted">
                Stoxure integrates real financial headlines so you learn how news impacts market movements and prices.
              </p>

              <h2 className="fs-4 fw-semibold">Simple & Student-Friendly</h2>
              <p className="text-muted">
                No clutter, no confusion — just a clean platform designed for learners who want to grow their financial skills.
              </p>

              <h2 className="fs-4 fw-semibold">Your Gateway to Smart Investing</h2>
              <p className="text-muted">
                Build your knowledge, test your strategies, and get ready for real investing with confidence and understanding.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN - IMAGE + LINKS */}
          <div className="col-12 col-md-6 text-center fade-up">
            <img
              src="/DashboardImg.png"
              alt="Stoxure Dashboard"
              className="img-fluid mb-4"
              style={{ marginLeft: "30px", hieght:"150px" }}
            />

            <div className="d-flex justify-content-center flex-wrap gap-3">
              <a href="/dashboard" className="btn-stoxure">
                Explore Dashboard as Guest <i className="bi bi-arrow-right"></i>
              </a>
              {/* <a href="#demo" className="btn-stoxure">
                Try Demo <i className="bi bi-arrow-right"></i>
              </a> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Stats;
