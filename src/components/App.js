import React, { useEffect } from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from 'recoil';

// components
import Header from './Header';
import Catalog from './Catalog';
import Cart from './Cart';


const App = () => {
  useEffect(() => {
    document.title = 'Recoil Demo | Ecommerce'
  }, []);

  return (
    <RecoilRoot>
      <Router basename="/">
        <Header />

        <Switch>
          <Route exact path="/" component={Catalog} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Router>
    </RecoilRoot>
  );
}

export default App;
