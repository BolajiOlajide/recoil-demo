import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  const totalQuantity = 1;

  return (
    <header className="header">
      <Link to="/">
        <h1>Proton's Merch</h1>
      </Link>
      <Link className="ui button primary" to="cart">
        Cart: {totalQuantity}
      </Link>
    </header>
  );
};

export default Header;
