import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";
import WatchList from "./WatchList";

const Orders = () => {
  const generalContext = useContext(GeneralContext);
  const transactions = generalContext.transactions;

  return (
    <div className="dashboard-container">
      <div className="watchlist-container">
        <WatchList />
      </div>

      <div className="content">
        <h1>Orders</h1>

        {transactions.length > 0 ? (
          <div className="order-table">
            <table>
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Stock</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Amount</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((t, idx) => (
                  <tr key={idx}>
                    <td
                      className={
                        t.type === "BUY" ? "profit" : "loss"
                      }
                    >
                      {t.type}
                    </td>
                    <td>{t.name}</td>
                    <td>{t.qty}</td>
                    <td>₹ {t.price.toFixed(2)}</td>
                    <td>₹ {t.amount.toFixed(2)}</td>
                    <td>
                      {new Date(t.timestamp).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No orders placed yet.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
