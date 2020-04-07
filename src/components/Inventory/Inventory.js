import React from 'react';

const Inventory = () => {

    const handleAddFoods=()=>{
    //    fetch('http://localhost:4200/addFoods',{
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //       // 'Content-Type': 'application/x-www-form-urlencoded',
    //     },
    //     body: JSON.stringify(foodData) // body data type must match "Content-Type" header
    //   })
    //   .then(res=>res.json())
    //   .then(data=>{
    //       console.log('post successful',data)
    //   })

    }
    return (
        <div>
            <h1>Add foods</h1>
            <button onClick={handleAddFoods} >Add all foods</button>
        </div>
    );
};

export default Inventory;