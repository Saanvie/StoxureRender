import React, { useContext, useEffect } from "react";
import WatchList from "./WatchList";
import { VerticalGraph } from "./VerticalGraph";
import GeneralContext from "./GeneralContext";

const Holdings = () => {
  const generalContext = useContext(GeneralContext);
  const allHoldings = generalContext.holdings;

  // ✅ STEP 1: Get watchlist
  const watchlist = generalContext.watchlist || [];

  // ✅ STEP 2: Update holdings prices from live prices whenever watchlist updates
  useEffect(() => {
    if (watchlist.length > 0) {
      generalContext.updateLivePrices(watchlist);
    }
  }, [watchlist, generalContext]);

  const labels = allHoldings.map((stock) => stock.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => {
          const live = watchlist.find((w) => w.name === stock.name);
          return live?.price ?? stock.price;
        }),
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  let totalInvestment = 0;
  let currentValue = 0;

  allHoldings.forEach((stock) => {
    const live = watchlist.find((w) => w.name === stock.name);
    const livePrice = live?.price ?? stock.price;

    totalInvestment += stock.avg * stock.qty;
    currentValue += livePrice * stock.qty;
  });

  // ✅ Unrealized P&L
  const unrealizedPnl = currentValue - totalInvestment;

  // ✅ Realized P&L from transactions
  let realizedPnl = 0;

  generalContext.transactions.forEach((txn) => {
    if (txn.type === "SELL") {
      // Look for current holding if it still exists
      const matchingHolding = allHoldings.find(
        (h) => h.name === txn.name
      );

      // ✅ Use avgCost saved in transaction if available
      const avgCostAtSell =
        txn.avgCost ?? matchingHolding?.avg ?? txn.price;

      const profitOnThisSale =
        (txn.price - avgCostAtSell) * txn.qty;

      realizedPnl += profitOnThisSale;
    }
  });

  const totalPnl = unrealizedPnl + realizedPnl;
  const pnlPercent =
    totalInvestment > 0
      ? (totalPnl / totalInvestment) * 100
      : 0;

  return (
    <div className="dashboard-container">
      <div className="watchlist-container">
        <WatchList />
      </div>

      <div className="content">
        <h3 className="title">
          Holdings ({allHoldings.length})
        </h3>

        {allHoldings.length > 0 ? (
          <>
            <div className="order-table">
              <table>
                <thead>
                  <tr>
                    <th>Instrument</th>
                    <th>Qty.</th>
                    <th>Avg. cost</th>
                    <th>LTP</th>
                    <th>Cur. val</th>
                    <th>P&L</th>
                  </tr>
                </thead>
                <tbody>
                  {allHoldings.map((stock, index) => {
                    const live = watchlist.find(
                      (w) => w.name === stock.name
                    );
                    const livePrice = live?.price ?? stock.price;

                    const curValue = livePrice * stock.qty;
                    const profit =
                      curValue - stock.avg * stock.qty;
                    const profClass =
                      profit >= 0 ? "profit" : "loss";

                    return (
                      <tr key={index}>
                        <td>{stock.name}</td>
                        <td>{stock.qty}</td>
                        <td>{stock.avg.toFixed(2)}</td>
                        <td>{livePrice.toFixed(2)}</td>
                        <td>{curValue.toFixed(2)}</td>
                        <td className={profClass}>
                          {profit.toFixed(2)} (
                          {(
                            (profit /
                              (stock.avg *
                                stock.qty || 1)) *
                            100
                          ).toFixed(2)}
                          %)
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="row">
              <div className="col">
                <h5>{totalInvestment.toFixed(2)}</h5>
                <p>Total investment</p>
              </div>
              <div className="col">
                <h5>{currentValue.toFixed(2)}</h5>
                <p>Current value</p>
              </div>
              <div className="col">
                <h5
                  className={
                    totalPnl >= 0 ? "profit" : "loss"
                  }
                >
                  {totalPnl.toFixed(2)} (
                  {pnlPercent.toFixed(2)}%)
                </h5>
                <p>Total P&L (Realized + Unrealized)</p>
              </div>
            </div>

            <VerticalGraph data={data} />
          </>
        ) : (
          <p>You have no holdings yet.</p>
        )}
      </div>
    </div>
  );
};

export default Holdings;
