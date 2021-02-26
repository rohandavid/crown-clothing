import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IOjWAA3fUd3SVOYe7WDLwxVBeTEiLfJpNnL5EcbD06RySUEFiNbMeN9iAKIg7EHNk97DxQjjuAr0EsRUfOcRdv0009xTUDXbf';

  const onToken = token => {
   alert('payment successful')
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='clothing-cart'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
