import React from 'react';
import './Food.css';
import foodData from '../../foodData/foodData';
import { useParams } from 'react-router-dom';

const Food = () => {
    const {foodId}=useParams();
    const selectedFood=foodData.find(food=>food.id==foodId);
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
                                    <button className="btn"><strong>-</strong></button>
                                    {1}
                                    <button className="btn">+</button>
                                </div>
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