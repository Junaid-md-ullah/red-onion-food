import React, { useState } from 'react';
import './Food.css';
import foodData from '../../foodData/foodData';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

const Food = () => {
    const {foodId}=useParams();
    const selectedFood=foodData.find(food=>food.id==foodId);
    const [cartQuan,setCartQuan]=useState(1);
    let a=1;
    const addquan=()=>{
        a=a+cartQuan;
        setCartQuan(a);
    }
    const decquan=()=>{
        a=cartQuan-a;
        setCartQuan(a);
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
                                    <button onClick={()=>decquan()} className="lock btn"><strong>-</strong></button>
                                    {cartQuan}
                                    <button onClick={()=>addquan()} className="btn">+</button>
                                </div>
                            </div>
                            <div className="btn d-flex addCartBtn">
                                <button className="btn btn-rounded"> <FontAwesomeIcon icon={faCartArrowDown} /> Add</button>
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