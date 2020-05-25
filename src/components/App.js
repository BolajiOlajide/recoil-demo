import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// components
import Header from './Header';
import Catalog from './Catalog';
import Cart from './Cart';


const App = () => {
  useEffect(() => {
    document.title = 'Recoil Demo | Ecommerce'
  }, []);

  return (
    <Router basename="/">
      <Header />

      <Switch>
        <Route exact path="/" component={Catalog} />
        <Route exact path="/cart" component={Cart} />
      </Switch>
      <p>Recoil Demo | Ecommerce</p>
    </Router>
  );
}

export default App;
