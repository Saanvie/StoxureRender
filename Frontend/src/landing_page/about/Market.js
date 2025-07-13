import React from "react";
import "./Market.css";

function Market() {
  return (
    <section className="about-market">
      <div className="container py-5 border-top">
        <h3 className="fw-bold mb-4 text-center">What is the Stock Market?</h3>
        
        <div className="row g-4">
          <div className="col-12 col-md-6">
            <div className="market-card">
              <span className="icon">💡</span>
              <p>
                The stock market is where people <strong>buy and sell parts of companies</strong>, called stocks.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="market-card">
              <span className="icon">📈</span>
              <p>
                Companies use it to <strong>raise money to grow</strong> and expand their business.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="market-card">
              <span className="icon">🤑</span>
              <p>
                Investors buy stocks hoping to <strong>earn profits</strong> as companies succeed.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-6">
            <div className="market-card">
              <span className="icon">🌎</span>
              <p>
                Stock markets exist not just in India (like NSE, BSE) but <strong>all around the world!</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Market;
