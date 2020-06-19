import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';


const HatsPage = () => (
  <div>
    <h1> HATS PAGE </h1>
  </div>
);

function App() {
  return (
    <div>
      <div>
        <switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route path="/hats" component={HatsPage}></Route>
        </switch>
      </div>
    </div>
  );
}

export default App;
