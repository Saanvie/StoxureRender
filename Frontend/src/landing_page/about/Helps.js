import React from "react";
import "./Helps.css";

const helps = [
  { icon: "🕹️", title: "Simulated Trading", desc: "Trade stocks without risking real money and learn by doing." },
  { icon: "📰", title: "Real News Integration", desc: "See how news headlines influence market movements." },
  { icon: "📊", title: "Virtual Portfolio", desc: "Track your simulated investments and analyze your progress." },
  { icon: "🎯", title: "Beginner-Friendly Design", desc: "Enjoy a clean, modern interface tailored for learners." }
];

function Helps() {
  return (
    <section className="about-helps border-top">
      <div className="container py-5  ">
        <h3 className="fw-bold mb-4 text-center">How Stoxure Helps You</h3>

        <div className="row p-3 mt-5 g-4">
          {helps.map((item, index) => (
            <div className="col-12 col-md-6" key={index}>
              <div className="helps-item d-flex align-items-start">
                <span className="helps-icon me-3">{item.icon}</span>
                <div>
                  <h5 className="fw-bold">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Helps;
