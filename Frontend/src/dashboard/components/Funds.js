import React, { useContext, useState } from "react";
import GeneralContext from "./GeneralContext";
import WatchList from "./WatchList";

const Funds = () => {
  const generalContext = useContext(GeneralContext);
  const [addAmount, setAddAmount] = useState("");

  const handleAddFunds = () => {
    const numeric = parseFloat(addAmount);

    if (isNaN(numeric) || numeric <= 0) {
      alert("Enter a valid amount.");
      return;
    }

    // Add funds to balance
    generalContext.setFundsBalance(
      generalContext.fundsBalance + numeric
    );

    setAddAmount("");
  };

  return (
    <div className="dashboard-container">
      <div className="watchlist-container">
        <WatchList />
      </div>

      <div className="content">
        <h1>Funds</h1>

        <div
          className="card"
          style={{
            backgroundColor: "#e4e6f8",
            padding: "20px",
            borderRadius: "8px",
            maxWidth: "400px",
            marginTop: "20px"
          }}
        >
          <h3>Available Balance</h3>
          <p
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#3B3B3B"
            }}
          >
            ₹ {generalContext.fundsBalance.toFixed(2)}
          </p>

          <div style={{ marginTop: "20px" }}>
            <input
              type="number"
              placeholder="Enter amount to add"
              value={addAmount}
              onChange={(e) => setAddAmount(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #d5d9ff",
                fontSize: "16px"
              }}
            />
            <button
              onClick={handleAddFunds}
              className="btn-stoxure"
              style={{ marginTop: "10px", width: "100%" }}
            >
              Add Funds
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Funds;
