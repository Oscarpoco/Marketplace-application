import React from 'react';

// REDUX
import { useSelector } from 'react-redux';

// STYLING
import '../styling/Navigation.css';

// ICONS
import { FaOpencart } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { SiWantedly } from "react-icons/si";

export default function Navigation (){

    // USE SELECTOR
    const sign = useSelector((state)=> state.userInterface.sign);
    // USE SELECTOR ENDS


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

            <div className='sign'>

                <button className='sign-button'>Sign In</button>
                <button className='sign-button' id='sign-button'>Sign Up</button>
                
            </div>
        </div>
        {/* ENDS */}
    </div>
  );
};

