import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setIsCartOpen } from '../../../store/cart/cart.actions'
import { selectCartItems } from '../../../store/cart/cart.selector'
import Button from '../../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import './cart-dropdown.style.scss'

const CartDropdown = () => {

    const dispatch = useDispatch()


    const cartItems = useSelector(selectCartItems)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        dispatch(setIsCartOpen(false))
        navigate('/checkout')
    }

    return (
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map(item => <CartItem key={item.id} CartItem={item} />)}
            </div>
            <Button onClick={goToCheckoutHandler} >GO TO CHECKOUT</Button>

        </div>
    )
}

export default CartDropdown