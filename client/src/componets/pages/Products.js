import React from 'react';

// REDUX
import {useDispatch} from 'react-redux';

// COMPONENTS FROM USERINTERFACE ACTIONS
import {renderLoader, renderPay } from '../../redux/actions/userInterFaceActions.js';

// STYLING
import '../styling/ProductGround.css';

export default function Products (){

    // USE DISPATCH
    const dispatch = useDispatch();
    // ENDS
    

    // HANDLE OPENING PRODUCTS
    const handlePay = () => {
        
        dispatch(renderLoader(true));
        setTimeout(()=>{
            
            dispatch(renderPay());
            dispatch(renderLoader(false));
        }, 3000);
        }
    // ENDS


  return (
    <div className='Products'>

        {/* CONTAINER TOP */}
            <div className='container-top'>
                <p>All Products</p>
            </div>
        {/* ENDS */}

        {/* CONTAINER BOTTOM */}
            <div className='container-bottom'>

                {/* GRID */}
                <div className='product-grid'>

                    <div className='item-product'>

                        <img src='item1.jpeg' alt='Product 1'/>
                        <div className='product-actions'>
                            <h5>Play Station 5</h5>
                            <div className='price'>
                                <p>Price</p>
                                <p>R7000</p>
                            </div>
                            <div className='product-buttons'>
                                <button className='btn-add'><span>+</span> to Cart</button>
                                <button className='btn-buy' onClick={handlePay}>Buy Now</button>
                            </div>

                        </div>

                    </div>

                    <div className='item-product'>

                        <img src='item2.jpeg' alt='Product 1'/>
                        <div className='product-actions'>
                            <h5>Play Station 5</h5>
                            <div className='price'>
                                <p>Price</p>
                                <p>R7000</p>
                            </div>
                            <div className='product-buttons'>
                                <button className='btn-add'><span>+</span> to Cart</button>
                                <button className='btn-buy' onClick={handlePay}>Buy Now</button>
                            </div>

                        </div>

                    </div>

                    <div className='item-product'>

                        <img src='item3.jpeg' alt='Product 1'/>
                        <div className='product-actions'>
                            <h5>Play Station 5</h5>
                            <div className='price'>
                                <p>Price</p>
                                <p>R7000</p>
                            </div>
                            <div className='product-buttons'>
                                <button className='btn-add'><span>+</span> to Cart</button>
                                <button className='btn-buy' onClick={handlePay}>Buy Now</button>
                            </div>

                        </div>

                    </div>
                    
                    <div className='item-product'>

                        <img src='item4.jpeg' alt='Product 1'/>
                        <div className='product-actions'>
                            <h5>Play Station 5</h5>
                            <div className='price'>
                                <p>Price</p>
                                <p>R7000</p>
                            </div>
                            <div className='product-buttons'>
                                <button className='btn-add'><span>+</span> to Cart</button>
                                <button className='btn-buy' onClick={handlePay}>Buy Now</button>
                            </div>

                        </div>

                    </div>


                </div>
                {/* GRID ENDS */}

            </div>
        {/* ENDS */}
        

    </div>
  );
};

