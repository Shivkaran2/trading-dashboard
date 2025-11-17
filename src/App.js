import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import StockDetails from './StockDetails';
import './App.css';

const stocks = [
  { symbol: 'AAPL', name: 'Apple' },
  { symbol: 'TSLA', name: 'Tesla' },
  { symbol: 'AMZN', name: 'Amazon' },
  { symbol: 'INFY', name: 'Infosys' },
  { symbol: 'TCS', name: 'Tata Consultancy Services' },
];

function App() {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const fetchPrices = async () => {
      const priceData = stocks.map(stock => ({
        symbol: stock.symbol,
        price: (Math.random() * (2000 - 100) + 100).toFixed(2),
      }));
      setPrices(priceData);
    };

    fetchPrices();
    
    const interval = setInterval(() => {
      setPrices(prevPrices => prevPrices.map(stock => ({
        ...stock,
        price: (Math.random() * (2000 - 100) + 100).toFixed(2),
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="App">
        <h1 className="header">Trading Dashboard</h1>
        <div className="prices-table">
          <h2>Live Stock Prices</h2>
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((price, index) => (
                <tr key={index}>
                  <td>
                    <Link to={`/stock/${price.symbol}`}>{price.symbol}</Link>
                  </td>
                  <td className={price.price >= 1000 ? 'price-up' : 'price-down'}>
                    {price.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Routes>
          {/* Correctly route to the StockDetails component */}
          <Route path="/stock/:symbol" element={<StockDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
