import React from 'react';

const Shipment = (props) => {
    return (
        <div>
            {
                props.cart.map(item=>
                    <div>
                        <img src={item.image} alt=""/>
                        <h6>{item.name}</h6>
                <h4>{item.quantity}</h4>
                    </div>
                    )
            }
        </div>
    );
};

export default Shipment;