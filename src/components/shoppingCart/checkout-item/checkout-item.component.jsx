import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import './checkout-item.style.scss'


const CheckoutItem = ({ cartItem }) => {
    const { deleteItemFromCart, addItemToCart, removeItemFromCart } = useContext(CartContext)
    const { name, imageUrl, price, quantity } = cartItem

    const clearItemHandler = () => deleteItemFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)
    const removeItemHandler = () => removeItemFromCart(cartItem)

    return (
        < div className="checkout-item-container" >
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>

            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler} >&#10216;</div>
                <span className='value' >{quantity}</span>
                <div className='arrow' onClick={addItemHandler}  >&#10217;</div>
            </span>
            <span className='price'>{price}</span>

            <div onClick={clearItemHandler} className='remove-button'>&#10006;</div>
        </div >
    )
}

export default CheckoutItem