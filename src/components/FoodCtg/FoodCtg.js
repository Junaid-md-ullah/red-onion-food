import React, { useState } from 'react';
import './FoodCtg.css';
import foodData from '../../foodData/foodData';


const FoodCtg = () => {
        const [foods,setFoods]=useState(foodData);
        const[selectedFoodsCat,setSelectedFoodsCat]=useState("lunch");
        const selectedFoods=foods.filter(food=>food.category===selectedFoodsCat);
        console.log(selectedFoodsCat.length);

    return (
        <div className="food-catg-area">
            <div className="container">
                <div className="row d-flex align-items-center raw">
                    <div className="catg-button">
                        <button className="" onClick={()=>setSelectedFoodsCat("breakfast")}>Breakfast</button>
                        <button className="active" onClick={()=>setSelectedFoodsCat("lunch")}>Lunch</button>
                        <button className="" onClick={()=>setSelectedFoodsCat("dinner")}>Dinner</button>

                    </div>
                </div>

                <div className="row d-flex align-items-center">
                    {
                        selectedFoods.map(food=>(
                            <div className="foodlist col-lg-4 col-md-6 col-sm-6">
                                <div className="single-food-item">
                                    <img src={food.img} alt=""/>
                                    <h3>{food.name}</h3>
                                    <p>{food.short}</p>
                                    <h4>${food.price}</h4>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default FoodCtg;