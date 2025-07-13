import React, { useState, useEffect, createContext } from "react";
import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = createContext({
  openBuyWindow: (uid, price) => {},
  closeBuyWindow: () => {},
  openSellWindow: (uid, price) => {},
  closeSellWindow: () => {},
  fundsBalance: 0,
  setFundsBalance: () => {},
  executeBuy: (stock, qty) => {},
  executeSell: (stock, qty) => {},
  holdings: [],
  transactions: [],
  updateLivePrices: (watchlist) => {}
});

export const GeneralContextProvider = ({ children }) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");
  const [selectedStockPrice, setSelectedStockPrice] = useState(0);

  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedSellUID, setSelectedSellUID] = useState("");
  const [selectedSellPrice, setSelectedSellPrice] = useState(0);

  const [fundsBalance, setFundsBalance] = useState(() => {
    const saved = localStorage.getItem("stoxureFunds");
    return saved ? parseFloat(saved) : 0;
  });

  const [holdings, setHoldings] = useState(() => {
    const saved = localStorage.getItem("stoxureHoldings");
    return saved ? JSON.parse(saved) : [];
  });

  const [transactions, setTransactions] = useState(() => {
    const saved = localStorage.getItem("stoxureTransactions");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("stoxureFunds", fundsBalance);
  }, [fundsBalance]);

  useEffect(() => {
    localStorage.setItem("stoxureHoldings", JSON.stringify(holdings));
  }, [holdings]);

  useEffect(() => {
    localStorage.setItem(
      "stoxureTransactions",
      JSON.stringify(transactions)
    );
  }, [transactions]);

  const openBuyWindow = (uid, price) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
    setSelectedStockPrice(price);
  };

  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
    setSelectedStockPrice(0);
  };

  const openSellWindow = (uid, price) => {
    setIsSellWindowOpen(true);
    setSelectedSellUID(uid);
    setSelectedSellPrice(price);
  };

  const closeSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedSellUID("");
    setSelectedSellPrice(0);
  };

  const addTransaction = (transaction) => {
    setTransactions((prev) => [transaction, ...prev]);
  };

  const executeBuy = (stock, qty) => {
    const cost = stock.price * qty;

    if (fundsBalance < cost) {
      alert("Not enough funds!");
      return;
    }

    setFundsBalance((prev) => prev - cost);

    const existing = holdings.find((h) => h.name === stock.name);
    if (existing) {
      const newQty = existing.qty + qty;
      const newAvg =
        (existing.avg * existing.qty + stock.price * qty) / newQty;

      const updatedHolding = {
        ...existing,
        qty: newQty,
        avg: newAvg,
        price: stock.price
      };

      setHoldings((prev) =>
        prev.map((h) =>
          h.name === stock.name ? updatedHolding : h
        )
      );
    } else {
      setHoldings((prev) => [
        ...prev,
        {
          name: stock.name,
          qty,
          avg: stock.price,
          price: stock.price,
          net: "0.00",
          day: "0%",
          isLoss: false
        }
      ]);
    }

    addTransaction({
      type: "BUY",
      name: stock.name,
      qty,
      price: stock.price,
      amount: cost,
      avgCost: stock.price,
      timestamp: new Date().toISOString()
    });
  };

  const executeSell = (stock, qty) => {
    const existing = holdings.find((h) => h.name === stock.name);

    if (!existing) {
      alert("Stock not found in holdings.");
      return;
    }

    if (existing.qty < qty) {
      alert("Not enough quantity to sell.");
      return;
    }

    const proceeds = stock.price * qty;

    setFundsBalance((prev) => prev + proceeds);

    if (existing.qty === qty) {
      setHoldings((prev) =>
        prev.filter((h) => h.name !== stock.name)
      );
    } else {
      const updated = {
        ...existing,
        qty: existing.qty - qty
      };

      setHoldings((prev) =>
        prev.map((h) =>
          h.name === stock.name ? updated : h
        )
      );
    }

    addTransaction({
      type: "SELL",
      name: stock.name,
      qty,
      price: stock.price,
      avgCost: existing.avg,
      amount: proceeds,
      timestamp: new Date().toISOString()
    });
  };

  const updateLivePrices = (watchlist) => {
    setHoldings((prev) =>
      prev.map((h) => {
        const live = watchlist.find((w) => w.name === h.name);
        return live
          ? { ...h, price: live.price }
          : h;
      })
    );
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
        openSellWindow,
        closeSellWindow,
        fundsBalance,
        setFundsBalance,
        executeBuy,
        executeSell,
        holdings,
        transactions,
        updateLivePrices
      }}
    >
      {children}

      {isBuyWindowOpen && (
        <BuyActionWindow
          uid={selectedStockUID}
          price={selectedStockPrice}
          onClose={closeBuyWindow}
        />
      )}

      {isSellWindowOpen && (
        <SellActionWindow
          uid={selectedSellUID}
          price={selectedSellPrice}
          onClose={closeSellWindow}
        />
      )}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
