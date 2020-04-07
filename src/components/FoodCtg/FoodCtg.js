import React, { useState } from 'react';
import './FoodCtg.css';
import { Link } from "react-router-dom";
import { useEffect } from 'react';

const FoodCtg = (props) => {
        const [foods,setFoods]=useState([]);
        const[selectedFoodsCat,setSelectedFoodsCat]=useState("lunch");
        const selectedFoods=foods.filter(food=>food.category===selectedFoodsCat);
        console.log(selectedFoodsCat.length);

        useEffect(()=>{
            fetch('http://localhost:4200/foods')
            .then(res=>res.json())
            .then(data=>{
                setFoods(data);
            })
        },[])

    return (
        <div className="food-catg-area">
            <div className="container">
                <div className="row d-flex align-items-center raw">
                    <div className="catg-button">
                        <button className="nav-item" onClick={()=>setSelectedFoodsCat("breakfast")}> <span  to="breakfast" className={selectedFoodsCat === "breakfast" ?  "active nav-btn" : "nav-btn"}>Breakfast</span></button>
                        <button className="nav-item" onClick={()=>setSelectedFoodsCat("lunch")}><span  to="breakfast" className={selectedFoodsCat === "lunch" ?  "active nav-btn" : "nav-btn"}>Lunch</span></button>
                        <button className="nav-item" onClick={()=>setSelectedFoodsCat("dinner")}><span  to="breakfast" className={selectedFoodsCat === "dinner" ?  "active nav-btn" : "nav-btn"}>Dinner</span></button>

                    </div>
                </div>

                <div className="row d-flex align-items-center justify-content-center">
                    {
                        selectedFoods.map(food=>(
                            
                            <div className="foodlist col-lg-4 col-md-6 col-sm-6">
                                <div className="single-food-item">
                                    <Link className="link" to={"/food/"+food.id}>
                                    <img src={food.img} alt=""/>
                                    <h3>{food.name}</h3>
                                    <p><small>{food.short}</small></p>
                                    <h4>${food.price}</h4>
                                    </Link>
                                </div>
                                
                            </div>
                        ))
                    }
                    {
                        props.cart.length>0?
                        <div className="food-ctg-cart-btn">
                            <Link to="/shipment"><button className="btn btn-danger">Checkout Food Cart</button></Link>
                        </div>
                        :
                        <div className="food-ctg-cart-btn">
                            <button className="btn btn-secondary" disabled>No Food In Cart</button>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default FoodCtg;