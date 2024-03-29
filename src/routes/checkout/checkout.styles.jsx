import styled from 'styled-components';

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  font-weight: 600;
  width: 18.5%;

  &:last-child {
    width: 7.5%;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const CheckoutContainer = styled.div`
  width: 55%;
  min-width: 38rem;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
`;
