import React, { useState } from 'react';

import {
  CardElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const [paymentError,setPaymentError]=useState(null);
   const [paymentFinished,setPaymentFinished]=useState(null);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });
    if(error){
            setPaymentError(error.message);
            setPaymentFinished(null)
        }
        else{
            setPaymentFinished(paymentMethod);
            setPaymentError(null)
        }

  };

  return (
      <div style={{marginTop:'8px',marginBottom:'8px'}}>
          <h3>Payment Information</h3>
          <form onSubmit={handleSubmit}>
      <CardElement />
      <button className="btn btn-warning" type="submit" disabled={!stripe}>
        Pay
      </button>
      {
        paymentError && <p style={{color:'red'}}>{paymentError}</p>
    }
    {
        paymentFinished && <p style={{color:'green'}}>Payment Successfully</p>

    }
    </form>
      </div>
    
  );
};


export default CheckoutForm;



    