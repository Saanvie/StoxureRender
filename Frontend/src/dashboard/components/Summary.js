import React, { useContext, useEffect, useState } from "react";
import WatchList from "./WatchList";
import GeneralContext from "./GeneralContext";

const Summary = () => {
  const generalContext = useContext(GeneralContext);
  const { holdings, fundsBalance, updateLivePrices, watchlist } = generalContext;

  // Local state to store calculated values
  const [summaryData, setSummaryData] = useState({
    totalInvestment: 0,
    currentValue: 0,
    pnl: 0,
    pnlPercent: 0
  });

  useEffect(() => {
    // ✅ Trigger live price update in context
    if (watchlist && watchlist.length > 0) {
      updateLivePrices(watchlist);
    }
  }, [watchlist, updateLivePrices]);

  useEffect(() => {
    let totalInvestment = 0;
    let currentValue = 0;

    holdings.forEach((stock) => {
      // ✅ Find live price if exists
      const live = watchlist?.find((w) => w.name === stock.name);
      const livePrice = live?.price ?? stock.price;

      totalInvestment += stock.avg * stock.qty;
      currentValue += livePrice * stock.qty;
    });

    const pnl = currentValue - totalInvestment;
    const pnlPercent =
      totalInvestment > 0
        ? (pnl / totalInvestment) * 100
        : 0;

    setSummaryData({
      totalInvestment,
      currentValue,
      pnl,
      pnlPercent
    });
  }, [holdings, watchlist]);

  const { totalInvestment, currentValue, pnl, pnlPercent } = summaryData;

  const marginsUsed = totalInvestment;
  const openingBalance = fundsBalance + marginsUsed;

  return (
    <div className="dashboard-container">
      <div className="watchlist-container">
        <WatchList />
      </div>

      <div className="content">

        <div className="section">
          <span>
            <p>Equity</p>
          </span>

          <div className="data">
            <div className="first">
              <h3>
                ₹ {fundsBalance.toFixed(2)}
              </h3>
              <p>Margin available</p>
            </div>
            <hr />

            <div className="second">
              <p>
                Margins used{" "}
                <span>₹ {marginsUsed.toFixed(2)}</span>{" "}
              </p>
              <p>
                Opening balance{" "}
                <span>₹ {openingBalance.toFixed(2)}</span>{" "}
              </p>
            </div>
          </div>
          <hr className="divider" />
        </div>

        <div className="section">
          <span>
            <p>
              Holdings ({holdings.length})
            </p>
          </span>

          <div className="data">
            <div className="first">
              <h3
                className={
                  pnl >= 0 ? "profit" : "loss"
                }
              >
                ₹ {pnl.toFixed(2)}{" "}
                <small>
                  {pnl >= 0 ? "+" : ""}
                  {pnlPercent.toFixed(2)}%
                </small>{" "}
              </h3>
              <p>P&L</p>
            </div>
            <hr />

            <div className="second">
              <p>
                Current Value{" "}
                <span>
                  ₹ {currentValue.toFixed(2)}
                </span>{" "}
              </p>
              <p>
                Investment{" "}
                <span>
                  ₹ {totalInvestment.toFixed(2)}
                </span>{" "}
              </p>
            </div>
          </div>
          <hr className="divider" />
        </div>
      </div>
    </div>
  );
};

export default Summary;
