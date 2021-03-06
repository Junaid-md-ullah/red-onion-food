import React, { useState,useEffect } from 'react';
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
import Extra from './components/Extra/Extra';
import Footer from './components/Footer/Footer';
import Inventory from './components/Inventory/Inventory';
import Payment from './components/Payment/Payment';
import CheckoutForm from './components/Payment/Payment';

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
              <Extra></Extra>
              <Footer></Footer>
            </Route>
            <Route path="/food/:foodId">
            <Header cart={cart}></Header>
              <Food cart={cart} cartHandler={cartHandler}></Food>
              <Footer></Footer>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <PrivateRoute path="/shipment">
                <Header cart={cart}></Header>
                <Shipment  cart={cart} checkOutItemHandler={checkOutItemHandler} deliveryDetailHandler={deliveryDetailHandler} deliveryDet={deliveryDet} clearCart={clearCart}></Shipment>
                <Footer></Footer>
            </PrivateRoute>
            <Route path="/orderdone/:orderPlacedId">
              <Header cart={cart}></Header>
              <OrderDone deliveryDet={deliveryDet}></OrderDone>
              <Footer></Footer>
            </Route>
            <Route path="/Inventory">
                <Inventory deliveryDet={deliveryDet}></Inventory>
            </Route>


          </Switch>
        </Router>
        </AuthProvider>
    </div>
  );
}

export default App;
