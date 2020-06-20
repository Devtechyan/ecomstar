import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.components.jsx';
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
      <div>
        <Header></Header>
        <switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/shop" component={ShopPage}></Route>
        </switch>
      </div>
    </div>
  );
}

export default App;
