import React from "react";

function Footer() {
  console.log("footer is rendering")
  return (
    
    <footer style={{ backgroundColor: "#e4e6f8" }}>
      <div className="container border-top mt-5 py-5">
        <div className="row gy-4">
          <div className="col-12 col-md-3">
            <img
              src="LogoMain.png"
              style={{ width: "40%" }}
              alt="Stoxure Logo"
            />
            <p className="mt-3" style={{ color: "#333333", fontSize: "14px" }}>
              © 2025 Stoxure
            </p>
          </div>
          <div className="col-6 col-md-3">
            <p className="fw-bold footer-heading">Company</p>
            <a href="/about" className="footer-link">About</a><br />
            <a href="/" className="footer-link">Home</a><br />
            <a href="/dashboard" className="footer-link">Dashboard</a><br />
          </div>
          <div className="col-6 col-md-3">
            <p className="fw-bold footer-heading">Resources</p>
            <a href="/product" className="footer-link">Product</a><br />
            <a href="/news" className="footer-link">News</a><br />
          </div>
          <div className="col-6 col-md-3">
            <p className="fw-bold footer-heading">Account</p>
            <a href="/signup" className="footer-link">Open an Account</a><br />
            <a href="/signup" className="footer-link">Login</a><br />
          </div>
        </div>

        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Stoxure is a stock market simulation platform for educational and
            demo purposes only. This is not a registered brokerage or investment
            advisory service.
          </p>
          <p>
            Disclaimer: Stoxure is a demo trading platform intended for
            educational purposes. Market data shown here is for simulation and
            learning only. Please consult a registered financial advisor before
            making real investments.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
