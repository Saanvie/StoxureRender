import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid, price: defaultPrice, onClose }) => {
  const generalContext = useContext(GeneralContext);

  const existing = generalContext.holdings.find(
    (h) => h.name === uid
  );

  const maxQty = existing ? existing.qty : 0;
  const ltp = existing ? existing.price : defaultPrice || 0.0;

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(ltp);

  useEffect(() => {
    if (!existing || existing.qty === 0) {
      setStockQuantity(0);
    } else {
      setStockQuantity(1);
    }
  }, [existing]);

  const handleSellClick = () => {
    const qty = parseInt(stockQuantity);
    const price = parseFloat(stockPrice);

    if (isNaN(qty) || qty <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    if (qty > maxQty) {
      alert(`You only own ${maxQty} shares.`);
      return;
    }

    if (isNaN(price) || price <= 0) {
      alert("Please enter a valid price.");
      return;
    }

    // Limit price to +/- 20% of LTP
    const minPrice = ltp * 0.8;
    const maxPrice = ltp * 1.2;

    if (price < minPrice || price > maxPrice) {
      alert(
        `Sell price must be between ₹${minPrice.toFixed(
          2
        )} and ₹${maxPrice.toFixed(2)}`
      );
      return;
    }

    // ✅ CALL executeSell with updated price:
    generalContext.executeSell(
      {
        name: uid,
        price: price
      },
      qty
    );

    onClose();
  };

  const handleCancelClick = () => {
    onClose();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              value={stockQuantity}
              onChange={(e) =>
                setStockQuantity(
                  Math.min(
                    Math.max(Number(e.target.value), 0),
                    maxQty
                  )
                )
              }
              min={0}
              max={maxQty}
              disabled={maxQty === 0}
            />
            <p style={{ fontSize: "12px", marginTop: "5px" }}>
              You own {maxQty} shares.
            </p>
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              min={ltp * 0.8}
              max={ltp * 1.2}
            />
            <p style={{ fontSize: "12px", marginTop: "5px" }}>
              Allowed range: ₹
              {(ltp * 0.8).toFixed(2)} - ₹
              {(ltp * 1.2).toFixed(2)}
            </p>
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          You will receive ₹ {(stockQuantity * stockPrice).toFixed(2)}
        </span>
        <div>
          <Link
            className="btn btn-blue"
            onClick={handleSellClick}
            style={{
              pointerEvents:
                maxQty === 0 || stockQuantity === 0
                  ? "none"
                  : "auto",
              opacity:
                maxQty === 0 || stockQuantity === 0
                  ? 0.5
                  : 1
            }}
          >
            Sell
          </Link>
          <Link
            to=""
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
