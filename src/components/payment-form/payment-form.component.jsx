import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  FormContainer,
  PaymentFormContainer,
  FeaturedContainer,
  FeaturedImg,
  FeaturedDetails,
  FeaturedBackground,
  CardElementStyled,
} from './payment-form.styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);

  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // start processing Payment
    setIsProcessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },

      // multiply by 100 to add 00, for decimals and remove '.'
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });

    // finished processing Payment
    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successful');
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FeaturedContainer>
        <FeaturedBackground></FeaturedBackground>
        <FeaturedImg
          // src='//unsplash.it/500/500'
          src='https://i.pinimg.com/originals/18/9d/dc/189ddc1221d9c1c779dda4ad37a35fa1.png'
        />
        <FeaturedDetails>
          <h2>Nike</h2>
        </FeaturedDetails>
      </FeaturedContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h3>Credit Cart Payment</h3>

        <input
          type='text'
          id='name'
          name='name'
          placeholder='Name'
          required
          minlength='4'
          size='20'
        ></input>

        <CardElementStyled />

        <input
          type='text'
          id='zipcode'
          name='zipcode'
          placeholder='Zipcode'
          required
          minlength='5'
          maxlength='5'
          size='5'
        ></input>

        <Button
          disabled={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          width='5rem'
        >
          Pay now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
