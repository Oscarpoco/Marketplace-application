import React from 'react';

// STYLING
import '../styling/ProductGround.css';

// ICONS
import { GiNewspaper } from "react-icons/gi";

export default function Banner (){
  return (
    <div className='Banner'>

        {/* CONTAINER LEFT */}
            <div className='container-left'>

                <img src='headphones.jpeg' alt='Product 1'/>

                <div className='container-left-content'>
                    <h2>New Arrivals</h2>
                    <h3>PlayStation 5</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className='btn-add'>Browse More</button>
                    <GiNewspaper className='news'/>
                </div>

            </div>
        {/* ENDS */}

        {/* CONTAINER RIGHT */}
            <div className='container-right'>
                <img src='ps5.jpeg' alt='Product 1'/>
                <button className='btn-buy'>Browse More</button>
            </div>
        {/* ENDS */}
        

    </div>
  );
};

