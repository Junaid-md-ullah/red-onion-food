import React, { useState } from 'react';
import './Food.css';
import foodData from '../../foodData/foodData';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const Food = (props) => {
    const {foodId}=useParams();
    const selectedFood=foodData.find(food=>food.id==foodId);
    const [cartQuan,setCartQuan]=useState(1);
    
    const finalCartHandler=selectedFood=>{
        selectedFood.quantity=cartQuan;
        props.cartHandler(selectedFood);

    }
    return (
        <div>
           <div className="container-food">
                <div className="row justify-content-between">
                    <div className="col-md-6 wrapper-food">
                        <div className="food-detail-contain">
                            <h1 align="left">{selectedFood.name}</h1>
                            <p align="left">{selectedFood.detail}</p>
                            <div className="price-cart d-flex">
                                <h2 align="left"><strong>${selectedFood.price}</strong></h2>
                                <div className="btn btn-wrap">
                                    <button onClick={()=>setCartQuan(cartQuan<=1? 1:cartQuan-1)} className="lock btn"><strong>-</strong></button>
                                    {cartQuan}
                                    <button onClick={()=>setCartQuan(cartQuan+1)} className="btn">+</button>
                                </div>
                            </div>
                            <div className="btn d-flex addCartBtn">
                                <button onClick={()=> finalCartHandler(selectedFood)} className="btn btn-rounded"> <FontAwesomeIcon icon={faCartArrowDown} /> Add</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="food-img">
                            <img src={selectedFood.img} alt=""/>
                        </div>

                    </div>
                </div>
           </div>
        </div>
    );
};

export default Food;