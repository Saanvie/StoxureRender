import React, { useEffect } from "react";
import "./Awards.css";

const awards = [
  {
    icon: "bi bi-bar-chart-line-fill",
    title: "Realistic Market Simulations",
    description:
      "Stoxure replicates live stock market behavior, letting users practice buying and selling with virtual funds in real-world conditions.",
  },
  {
    icon: "bi bi-newspaper",
    title: "Integrated Market News",
    description:
      "Get live financial news and insights directly inside the platform, helping users make smarter virtual trades.",
  },
  {
    icon: "bi bi-trophy-fill",
    title: "Personalized Watchlists",
    description:
      "Users can create custom watchlists to track their favorite stocks and monitor market movements in real time.",
  },

  {
    icon: "bi bi-graph-up",
    title: "Advanced Portfolio Analytics",
    description:
      "Track profits, analyze performance, and review detailed charts to learn from every virtual investment decision.",
  },
  {
    icon: "bi bi-emoji-smile-fill",
    title: "Beginner-Friendly Design",
    description:
      "A simple, clean interface makes exploring markets easy, even for users completely new to trading.",
  },
];

function Awards() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up");
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add("visible");
      }, index * 200);
    });
  }, []);

  return (
<section
  id="start"
  className="awards-section py-5 border-top"
  style={{ marginTop: "12px" }}
>
      <div className="container">
        <div className="text-center mb-5 fade-up">
          <h2 className="fw-bold display-5">Why Choose Stoxure?</h2>
          <p className="text-muted fs-5">
            Discover the features that make Stoxure your perfect virtual trading platform.
          </p>
        </div>
        <div className="row g-4 justify-content-center">
          {awards.map((award, index) => (
            <div key={index} className="col-12 col-md-4 fade-up">
              <div className="award-card text-center h-100 p-4 zoom-on-hover">
                <div className="icon mb-3 fs-1">
                  <i className={award.icon}></i>
                </div>
                <h5 className="fw-bold mb-2">{award.title}</h5>
                <p className="text-muted">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
