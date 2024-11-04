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

                <img src='https://picsum.photos/200/300' alt='Product 1'/>

                <div className='container-left-content'>
                    <h2>Trending Today</h2>
                    <h3>PlayStation 5</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className='btn-add'><span>+</span> to Cart</button>
                    <GiNewspaper className='news'/>
                </div>

            </div>
        {/* ENDS */}

        {/* CONTAINER RIGHT */}
            <div className='container-right'></div>
        {/* ENDS */}
        

    </div>
  );
};

