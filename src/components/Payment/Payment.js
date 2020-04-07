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
      <div>
          <h3>Payment Information</h3>
          <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
      {
        paymentError && <p>{paymentError}</p>
    }
    {
        paymentFinished && <p>Payment Successfully</p>

    }
    </form>
      </div>
    
  );
};


export default CheckoutForm;



    