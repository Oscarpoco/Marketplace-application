// REDUX
import {useDispatch} from 'react-redux';
import { useState } from 'react';

// COMPONENTS FROM USERINTERFACE ACTIONS
import { renderLoader, renderPay } from '../../redux/actions/userInterFaceActions.js';

// STYLING
import '../styling/Cart.css';

// ICONS

export default function PayNow (){

    const [quantity, setQuantity] = useState(1);

    // USE DISPATCH
    const dispatch = useDispatch();
    // ENDS
    

    // HANDLE OPENING PRODUCTS
    const handleOpenProducts = () => {
        
        dispatch(renderLoader(true));
        setTimeout(()=>{
         
            dispatch(renderLoader(false));
        }, 3000);
        }
    // ENDS

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    }

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }


  return (
    <div className='PayNow'>

        {/* IMAGE */}
            <img src='item4.jpeg' alt='paymentImage'></img>
        {/* ENDS */}

        {/* PayNow */}
            <div className='payment-details'>
            <h2>Pay Now</h2>
                <p className='price'>Price: R5000</p>
                <p className='description'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='quantity-container'>
                    <button className='btn-quantity' onClick={decrementQuantity}><span>-</span></button>
                    <span className='quantity'>{quantity}</span>
                    <button className='btn-quantity' onClick={incrementQuantity}><span>+</span></button>
                </div>
                <button className='btn-buy' onClick={handleOpenProducts}>Checkout Now</button>
                <button className='btn-close' onClick={()=> dispatch(renderPay())}><span>+</span></button>
            </div>
        {/* ENDS */}


        
    </div>
  );
};

