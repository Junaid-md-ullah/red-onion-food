import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import FoodCtg from './components/FoodCtg/FoodCtg';
import Food from './components/Food/Food';

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Router>
          <Switch>
            <Route exact path="/">
              <Banner></Banner>
              <FoodCtg></FoodCtg>
            </Route>
            <Route path="/food/:foodId">
              <Food></Food>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
