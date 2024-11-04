import React from 'react';

// STYLING
import '../styling/Navigation.css';

// ICONS
import { FaOpencart } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { SiWantedly } from "react-icons/si";

export default function Navigation (){
  return (
    <div className='Navigator'>

        {/* LOGO */}
        <div className='logo'>
            <div className='company-logo'>
                <FaOpencart className='logo-img'/>
            </div>
            <div className='company-name'>m<span>Buy</span></div>
        </div>
        {/* ENDS */}

        {/* SUGGESDTION */}
        <div className='suggestion'>
            <div className='suggestion-text'><SiShopee className='suggestion-icon'/> All Products</div>
            <div className='suggestion-text'><RiAlignItemBottomFill className='suggestion-icon'/> New Products</div>
            <div className='suggestion-text'><SiWantedly className='suggestion-icon'/> Popular Products</div>
        </div>
        {/* SUGGESTION */}

        {/* SEARCH */}
        <div className='search'>
            <input type='text' placeholder='Search for products'/>
        </div>
        {/* ENDS */}
    </div>
  );
};

