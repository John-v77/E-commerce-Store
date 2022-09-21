import styled from 'styled-components';

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  width: 7.55%;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Name = styled.span`
  width: 18.5%;
`;
export const Quantity = styled(Name)`
  display: flex;
`;
export const Price = styled(Name)``;

export const ImageContainer = styled.div`
  width: 18.5%;
  padding-right: 15px;

  img {
    width: 40%;
    height: 40%;
  }
`;

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;
