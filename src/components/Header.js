import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from 'recoil';

import { cartState } from '../store';


const Header = () => {
  const { totalQty } = useRecoilValue(cartState);

  return (
    <header className="header">
      <Link to="/">
        <h1>Proton's Merch</h1>
      </Link>
      <Link className="ui button primary" to="cart">
        Cart: {totalQty}
      </Link>
    </header>
  );
};

export default Header;
