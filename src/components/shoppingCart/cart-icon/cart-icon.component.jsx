import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../../store/cart/cart.actions';
import {
  selectIsCartOpen,
  selectCartCount,
} from '../../../store/cart/cart.selector';

import {
  ShoppingIcon,
  CartIconContainer,
  ItemCount,
} from './cart-icon.styles.jsx';

import './cart-icon.styles.jsx';

const CartIcon = (props) => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);

  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount || '0'}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
