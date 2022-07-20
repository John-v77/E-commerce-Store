import './cart-item.style.scss'

const CartItem = ({ CartItem }) => {
    const { name, imageUrl, price, quantity } = CartItem

    return (
        <div className='cart-item-container'>
            <img src={imageUrl} alt={`${name}`} />
            <div className='item-details'>
                <h3 className='name'>{name}</h3>
                <span>{quantity} x ${price} </span>
            </div>
        </div>
    )

}

export default CartItem;