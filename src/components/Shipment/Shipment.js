import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useAuth } from '../Login/use-auth';
import { useState } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {
    Elements
  } from '@stripe/react-stripe-js';
import CheckoutForm from '../Payment/Payment';

const Shipment = (props) => {
    const [orderPlacedId,setOrderPlacedId]=useState(null);
    const [buttonVisible,setButtonVisible]=useState(false);
    const stripePromise = loadStripe('pk_test_wkQoc6p8qSU5F9tzOuFUHvoh00oUY9tLkK');
    const { register, handleSubmit, watch, errors } = useForm();
    const auth=useAuth();
    const onSubmit=(data)=>{
        props.deliveryDetailHandler(data);
    }
    const placedOrderHandler=()=>{
        const orderDetails={email: auth.user.email, cart:props.cart, shipment:props.deliveryDet};
        console.log(orderDetails);
        fetch('http://localhost:4200/placeOrder',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(orderDetails) // body data type must match "Content-Type" header
      })
      .then(res => res.json())
      .then(data=>{
          const orderId=data._id;
          setOrderPlacedId(orderId);
          props.clearCart();

      })
      setButtonVisible(true);
    }
    const{deliveryToDoor,RoadNo,flat,address}=props.deliveryDet;

    const subTotal=props.cart.reduce((strt,crntItem)=>{
        return strt+(crntItem.price*crntItem.quantity);
    },0)
    const totalQuantity=props.cart.reduce((strt,crntItem)=>{
        return strt+(crntItem.quantity);
    },0)
    const tax=(subTotal/100)*2;
    const deliveryFee=totalQuantity && 2;
    const finalTotal=subTotal+tax+deliveryFee;
    
    return (
        <div className="main1 d-flex justify-content-center">
            <div className="container justify-content-center">
                <div className="row">
                    <div className="col-md-5 address-form">
                        <h4>Edit Delivery Details</h4>
                        <hr/>
                        <form className="form-group" onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" name="deliveryToDoor" ref={register({ required: true })} placeholder="Delivery To Door" />
                            {/* errors will return when field validation fails  */}
                            {errors.deliveryToDoor && <span>This field is required</span>}
                            <input className="form-control" name="RoadNo" ref={register({ required: true })} placeholder="Road No." />
                            {/* errors will return when field validation fails  */}
                            {errors.RoadNo && <span>This field is required</span>}
                            <input className="form-control" name="flat" ref={register({ required: true })} placeholder="Flat, Suite or Floor" />
                            {/* errors will return when field validation fails  */}
                            {errors.flat && <span>This field is required</span>}
                            <input className="form-control" name="address" ref={register({ required: true })} placeholder="Address" />
                            {/* errors will return when field validation fails  */}
                            {errors.address && <span>This field is required</span>}
                            <button className="btn btn-danger shipping-button"> Save & Continue</button>
                            
                        </form>
                    </div>
                    <div className="col-md-5 offset-md-2">
                        <div className="cart-items">
                            <h4>From <strong>Izumi Japanese Kitchen</strong></h4>
                            <h5>Arriving in 20-30 min</h5>
                            <h5>24C Rd No 113/A</h5>
                            
                                {
                                    props.cart.map(item=>
                                        <div className="single-cart-item d-flex justify-content-between align-items-center bg-light rounded">
                                        <img width="100px" src={item.img} alt=""/>
                                            <div>
                                                <h6>{item.name}</h6>
                                                <h4 className="text-danger">{item.price}</h4>
                                                <p>Delivery fee $2</p>
                                            </div>
                                            <div className="btn checkout-item-button align-items-center">
                                                <button className="btn font-weight-bolder" onClick={()=>props.checkOutItemHandler(item.id,(item.quantity+1))}>+</button>
                                                <button className="btn font-weight-bolder bg-white">{item.quantity}</button>
                                                {
                                                    item.quantity>0?
                                                    <button className="btn font-weight-bolder" onClick={()=>props.checkOutItemHandler(item.id,(item.quantity-1))}>-</button>
                                                    :
                                                    <button className="btn font-weight-bolder" disabled>-</button>
                                                }
                                            </div>

                                            
                                        </div>  
                                    )
                                }
                                <div className="calculation">
                                    <p className="d-flex justify-content-between"> <span>Sub Total. {totalQuantity}</span> <span>${subTotal.toFixed(2)}</span></p>
                                    <p className="d-flex justify-content-between"><span>Tax</span> <span>${tax.toFixed(2)}</span></p>
                                    <p className="d-flex justify-content-between"><span>Delivery Fee</span> <span>${deliveryFee}</span></p>
                                    <p className="d-flex justify-content-between"><span>Total</span> <span>${finalTotal.toFixed(2)}</span></p>
                                </div>
                                <div>
                                    
                                </div>
                                <div style={{display: orderPlacedId && deliveryToDoor && RoadNo && flat && address && 'none'}}>
    
                                <Elements stripe={stripePromise} >
                                    <CheckoutForm></CheckoutForm>
                                </Elements>
        
                                </div>
                                <div>
                                {
                                        orderPlacedId &&
                                        <div>
                                            <p>Order Id: #{orderPlacedId}</p>
                                        </div>
                                    }
                                </div>
                                {
                                    deliveryToDoor && RoadNo && flat && address?
                                     <div>
                                         {
                                          !buttonVisible &&  <button className="btn btn-danger checkout-btn" onClick={placedOrderHandler}>Confirm</button>
                                         }
                                         
                                         {
                                             orderPlacedId &&
                                             <Link to={"/orderdone/"+orderPlacedId}>
                                                <button className="btn btn-secondary checkout-btn">Proceed to Checkout</button>
                                             </Link>
                                             
                                         }
                                     </div>
                                        
                                        
                                    :
                                    <button className="btn btn-secondary checkout-btn" disabled>Confirm</button>

                                }
                                
                        
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Shipment;