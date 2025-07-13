import React, { useState } from "react";
import "./Why.css";

function Why() {
  const [openIndex, setOpenIndex] = useState(null);

  const items = [
    {
      title: "Everyday Life",
      content:
        "The stock market influences your daily life—from the prices of goods to the health of companies that might hire you."
    },
    {
      title: "The Economy",
      content:
        "Rising or falling markets impact job growth, business expansion, and even government budgets."
    },
    {
      title: "Your Future",
      content:
        "Even if you don’t invest today, knowing how markets work helps you plan better for career decisions, savings, and long-term goals."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="about-why">
      <div className="container py-5 border-top">
        <h3 className="fw-bold mb-4 text-center">How the Stock Market Impacts You</h3>
        <div className="row p-3 mt-5">
          <div className="col-12 col-md-8 offset-md-2">
            {items.map((item, index) => (
              <div
                key={index}
                className={`accordion-item ${openIndex === index ? "open" : ""}`}
                onClick={() => toggle(index)}
              >
                <div className="accordion-title">
                  {item.title}
                  <span>{openIndex === index ? "-" : "+"}</span>
                </div>
                {openIndex === index && (
                  <div className="accordion-content">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Why;
