import React, { useEffect } from "react";
import "./OpenAccount.css";

function OpenAccount() {
  useEffect(() => {
    const el = document.querySelector(".fade-up-open");
    if (el) {
      el.classList.add("visible");
    }
  }, []);

  return (
    <section className="openaccount-section">
      <div className="container d-flex flex-column justify-content-center align-items-center text-center fade-up-open">
        <h2 className="fw-bold display-5 mb-3">
          Ready to Start Your Stoxure Journey?
        </h2>
        <p className="fs-5 text-muted mb-4">
          Join thousands of learners exploring the stock market safely and building their confidence—one click at a time.
        </p>
        <a href="/signup" className="btn-stoxure btn-stoxure-lg">
          Open Your Free Account
        </a>
      </div>
    </section>
  );
}

export default OpenAccount;
