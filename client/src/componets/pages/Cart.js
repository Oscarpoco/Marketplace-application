// REDUX
import { useDispatch, useSelector } from 'react-redux';

// COMPONENTS FROM USERINTERFACE ACTIONS
import { renderLoader, renderAddToCart } from '../../redux/actions/userInterFaceActions.js';

// STYLING
import '../styling/Cart.css';

// ICONS

export default function Cart() {

    const dispatch = useDispatch();
    const cartItems = useSelector(state => state.cart.items);

    const handleCloseCart = () => {
        dispatch(renderLoader(true));
        setTimeout(() => {
            dispatch(renderAddToCart());
            dispatch(renderLoader(false));
        }, 3000);
    }

    return (
        <div className='Cart'>
            <h2>Your Shopping Cart</h2>
            <div className='cart-items'>
                {cartItems.length > 0 ? (
                    cartItems.map(item => (
                        <div key={item.id} className='cart-item'>
                            <img src={item.image} alt={item.title} className='cart-item-image' />
                            <div className='cart-item-details'>
                                <h4>{item.title}</h4>
                                <p className='cart-item-price'>R {item.price}</p>
                                <div className='quantity-controls'>
                                    <button className='btn-decrease'>-</button>
                                    <span className='quantity'>{item.quantity}</span>
                                    <button className='btn-increase'>+</button>
                                </div>
                            </div>
                            <button className='btn-remove'>Remove</button>
                        </div>
                    ))
                ) : (
                    <p>Your cart is empty. Add some items to get started!</p>
                )}
            </div>
            <div className='cart-summary'>
                <p className='total-label'>Total:</p>
                <p className='total-amount'>R {cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
            </div>
            <button className='btn-checkout' onClick={handleCloseCart}>Proceed to Checkout</button>
        </div>
    );
};
