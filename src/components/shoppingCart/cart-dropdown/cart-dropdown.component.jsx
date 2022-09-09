import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setIsCartOpen } from '../../../store/cart/cart.actions';
import { selectCartItems } from '../../../store/cart/cart.selector';
import Button from '../../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cart-dropdown.style';

const CartDropdown = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    dispatch(setIsCartOpen(false));
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} CartItem={item} />)
        ) : (
          <EmptyMessage> Cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
