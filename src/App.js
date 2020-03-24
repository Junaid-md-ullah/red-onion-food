import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header></Header>
        <Router>
          <Switch>
            <Route exact path="/">
              <Banner></Banner>
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
