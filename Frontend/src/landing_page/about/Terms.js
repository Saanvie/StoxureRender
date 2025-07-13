import React from "react";
import "./Terms.css";

const terms = [
  { icon: "🇮🇳", term: "NSE", desc: "National Stock Exchange of India." },
  { icon: "🇮🇳", term: "BSE", desc: "Bombay Stock Exchange. Another major Indian market." },
  { icon: "🌎", term: "International Markets", desc: "Markets like NYSE (US), FTSE (UK), Nikkei (Japan)." },
  { icon: "📈", term: "Stocks", desc: "Pieces of ownership in a company." },
  { icon: "🏢", term: "IPO", desc: "A company selling shares to the public for the first time." },
  { icon: "📊", term: "Index", desc: "A group of stocks showing how the market is performing overall." },
  { icon: "🐂", term: "Bull Market", desc: "Prices rising, optimism in the market." },
  { icon: "🐻", term: "Bear Market", desc: "Prices falling, caution in the market." }
];

function Terms() {
  return (
    <section className="about-terms">
      <div className="container py-5 border-top">
        <h3 className="fw-bold mb-4 text-center">Key Terms You Should Know</h3>

        <div className="row p-3 mt-5 g-4">
          {terms.map((item, index) => (
            <div className="col-12 col-md-3" key={index}>
              <div className="term-card h-100 d-flex flex-column justify-content-center">
                <span className="icon">{item.icon}</span>
                <h5 className="fw-bold mt-2">{item.term}</h5>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Terms;
