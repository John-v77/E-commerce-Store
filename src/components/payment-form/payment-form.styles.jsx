import styled from 'styled-components';
import { CardElement } from '@stripe/react-stripe-js';

export const FeaturedBackground = styled.div`
  background-color: #0d030b;
  border-radius: 50%;
  height: 170%;
  width: 130%;
  top: -34%;
  left: -30%;
  position: relative;
`;

export const FixAntiAliasing = styled.div`
  background-color: #0d030b;
  width: 100%;
  height: 100%
  position: relative;
`;

export const FeaturedDetails = styled.div`
  /* background: blue; */
  width: 80%;
  height: 20rem;
  top: -190%;
  left: 5%;
  position: relative;
  color: white;

  p:first-child {
    font-size: 0.8rem;
    font-weight: 300;
    margin: 0;
  }

  h2 {
    font-size: 1.7rem;
    font-weight: 300;
    line-height: 1rem;
    text-align: center;
  }

  p:second-child {
    font-size: 1.5rem;
    font-weight: 300;
    letter-spacing: 0.18rem;
    text-align: center;
  }
`;

export const FeaturedImg = styled.img`
  width: 100%;
  height: 100%;
  top: -170%;
  left: -10%;
  position: relative;
  border-radius: 35%;
`;

export const FeaturedContainer = styled.div`
  /* background: lightskyblue; */
  width: 40%;
`;

export const FormContainer = styled.form`
  /* background: lightskyblue; */
  width: 60%;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: around;

  input {
    width: 70%;
    padding: 0.4rem 0;
    margin: 20px 0;
    border: none;
    display: inline-block;
    border-bottom: solid 1px grey;
    background-color: transparent;
  }

  h3 {
    margin: 0 0 1rem;
  }
`;

export const CardElementStyled = styled(CardElement)`
  margin: 20px;
  height: 2rem;
  border-bottom: solid 1px grey;
`;

export const PaymentFormContainer = styled.div`
  background: #EBEBEB;
  width: 100%;
  height: 20.75rem;
  display: flex;
  padding: 1rem;
  overflow: hidden;
  margin: 4rem 0;
  border-radius: 5px;
  // border: 2px solid black;
`;
