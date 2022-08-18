import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ShoppingIcon } from '../../../assets/shopping-bag.svg';
import { setIsCartOpen } from '../../../store/cart/cart.actions';
import { selectIsCartOpen, selectCartCount } from '../../../store/cart/cart.selector';
import './cart-icon.styles.scss'


const CartIcon = (props) => {
    const dispatch = useDispatch()
    const isCartOpen = useSelector(selectIsCartOpen)

    const cartCount = useSelector(selectCartCount)

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen))

    return (
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon' />

            {/* <span className='item-count'>{'0'}</span> */}
            <span className='item-count'>{cartCount || '0'}</span>
        </div>
    );
}

export default CartIcon;