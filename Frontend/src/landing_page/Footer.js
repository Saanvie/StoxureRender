import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <p>
              © 2025 Stoxure Technologies Pvt. Ltd. All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            <a href="">About</a>
            <br />
            <a href="">Our Mission</a>
            <br />
            <a href="">Pricing</a>
            <br />
            <a href="">Contact Us</a>
            <br />
            <a href="">Blog / Newsroom </a>
            <br />

          </div>
          <div className="col">
            <p> Resources </p>
            <a href="">Contact</a>
            <br />
            <a href="">API Documentation</a>
            <br />
            <a href="">Downloads</a>
            <br />
            <a href="">Glossary / Learn Stocks</a>
            <br />

          </div>
          <div className="col">
            <p>Account</p>
            <a href="">Open an account</a>
            <br />
            <a href="">Fund Portfolio</a>
            <br />
            <a href="">Track Challenge </a>
            <br />
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
Stoxure is a stock market simulation platform for educational and demo purposes only. This is not a registered brokerage or investment advisory service.

          </p>

          <p>
Disclaimer: Stoxure is a demo trading platform intended for educational purposes. Market data shown here is for simulation and learning only. Please consult a registered financial advisor before making real investments.

          </p>


        </div>
      </div>
    </footer>
  );
}

export default Footer;