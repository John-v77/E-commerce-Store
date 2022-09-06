import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h1>Credit Cart Payment</h1>
        <CardElement>
          <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay now</Button>
        </CardElement>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
