import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function StockDetails() {
  // Get the stock symbol from the URL parameter
  const { symbol } = useParams();

  // Debugging: Check if we are getting the symbol correctly
  console.log("Stock Symbol from URL: ", symbol);

  return (
    <div className="stock-details">
      <h2>Stock Details for {symbol}</h2>
      {/* Let's also display the symbol in the content */}
      <p>Currently viewing details for stock: {symbol}</p>
    </div>
  );
}

export default StockDetails;
