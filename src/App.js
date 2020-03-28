import React, { useState } from 'react';
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
import Login from './components/Login/Login';
import { AuthProvider } from './components/Login/use-auth';
import Shipment from './components/Shipment/Shipment';

function App() {
  const [cart,setCart]=useState([]);
  const cartHandler=(data)=>{
      const alreadyAdded=cart.find(crt=>crt.id==data.id);
      const newCart=[...cart,data];
      setCart(newCart);
      if(alreadyAdded){
        const update=cart.filter(crt=>cart.id!=data)
        setCart(update);
      }
  }
  return (
    <div className="App">
      <AuthProvider>
      
        <Router>
          <Switch>
            <Route exact path="/">
            <Header cart={cart}></Header>
              <Banner></Banner>
              <FoodCtg></FoodCtg>
            </Route>
            <Route path="/food/:foodId">
            <Header cart={cart}></Header>
              <Food cart={cart} cartHandler={cartHandler}></Food>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/shipment">
                <Shipment cart={cart}></Shipment>
            </Route>

          </Switch>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
