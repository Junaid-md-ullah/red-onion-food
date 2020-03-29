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
import { AuthProvider,PrivateRoute } from './components/Login/use-auth';
import Shipment from './components/Shipment/Shipment';
import OrderDone from './components/OrderDone/OrderDone';

function App() {
  const [cart,setCart]=useState([]);
  const [deliveryDet,setDeliveryDet]=useState({
    deliveryToDoor:null,RoadNo:null,flat:null,address:null
  })
  const deliveryDetailHandler=(data)=>{
    setDeliveryDet(data)
  }
  const clearCart=()=>{
    setCart([]);
  }
  const cartHandler=(data)=>{
      const alreadyAdded=cart.find(crt=>crt.id==data.id);
      const newCart=[...cart,data];
      setCart(newCart);
      if(alreadyAdded){
        const update=cart.filter(crt=>cart.id!=data)
        setCart(update);
      }else{
        const newCart=[...cart,data];
        setCart(newCart);
      }
  }
  const checkOutItemHandler=(id,quan)=>{
      const newCart=cart.map(item=>{
        if(item.id==id){
          item.quantity=quan;
        }
        return item;
      })
      const updateCart=newCart.filter(item=>item.quantity>0)
      setCart(updateCart);
  }
  return (
    <div className="App">
      <AuthProvider>
      
        <Router>
          <Switch>
            <Route exact path="/">
            <Header cart={cart}></Header>
              <Banner></Banner>
              <FoodCtg cart={cart}></FoodCtg>
            </Route>
            <Route path="/food/:foodId">
            <Header cart={cart}></Header>
              <Food cart={cart} cartHandler={cartHandler}></Food>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/shipment">
                <Header cart={cart}></Header>
                <Shipment cart={cart} checkOutItemHandler={checkOutItemHandler} deliveryDetailHandler={deliveryDetailHandler} deliveryDet={deliveryDet} clearCart={clearCart}></Shipment>
            </PrivateRoute>
            <Route path="/orderdone">
              <Header cart={cart}></Header>
              <OrderDone deliveryDet={deliveryDet}></OrderDone>
            </Route>

          </Switch>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
