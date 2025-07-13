import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid, price: defaultPrice, onClose }) => {
  console.log("BuyActionWindow is rendering");

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(defaultPrice || 0.0);

  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    const qty = parseInt(stockQuantity);
    const price = parseFloat(stockPrice);

    if (isNaN(qty) || qty <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }

    if (isNaN(price) || price <= 0) {
      alert("Please enter a valid price.");
      return;
    }

    const cost = qty * price;

    if (generalContext.fundsBalance < cost) {
      alert("Not enough funds.");
      return;
    }

    generalContext.executeBuy({ name: uid, price }, qty);

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
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              min={1}
            />
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
              min={0.01}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          Margin required ₹ {(stockQuantity * stockPrice).toFixed(2)}
        </span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
