import React from 'react';
import './App.css';
import Main from './views/Main';
import OneProduct from './views/OneProduct';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main />    
          </Route>
          <Route path="/product/:id">
            <OneProduct />    
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
