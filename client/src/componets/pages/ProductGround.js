import React from 'react';

// STYLING
import '../styling/ProductGround.css';
import Banner from './Banner';
import Products from './Products';

export default function ProductGround (){
  return (
    <div className='productGround'>

        {/* BANNER */}
            <Banner/>
        {/* BANNER ENDS */}

        {/* PRODUCTS */}
            <Products/>
        {/* PRODUCTS ENDS */}
    </div>
  );
};

