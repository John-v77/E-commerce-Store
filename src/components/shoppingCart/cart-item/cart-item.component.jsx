import { CartItemContainer, ItemDetails, Name } from './cart-item.style.jsx';

const CartItem = ({ CartItem }) => {
  const { name, imageUrl, price, quantity } = CartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}{' '}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
