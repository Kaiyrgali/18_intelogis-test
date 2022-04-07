import React from 'react';
import { Link } from 'react-router-dom';

function ShopHeader() {
  return (
    <header className="shop-header">
      <Link to="/" className="logo">
        <img src="logo.svg" alt="logo"></img>
      </Link>
      <h2>Pawn Shop Jewelry</h2>
    </header>
  );
}

export default ShopHeader;
