import React from 'react';

// REDUX
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { renderLoader, renderSign } from '../../redux/actions/userInterFaceActions.js';
import { logoutUser } from '../../redux/actions/authenticationAction.js';

// STYLING
import '../styling/Navigation.css';

// ICONS
import { FaOpencart } from "react-icons/fa";
import { SiShopee } from "react-icons/si";
import { RiAlignItemBottomFill } from "react-icons/ri";
import { SiWantedly } from "react-icons/si";

export default function Navigation (){

    const dispatch = useDispatch();

    const user = useSelector((state)=> state.auth.authentication);

    
    // HANDLE FORM CLOSE
    const handleCloseForm = () => {
        dispatch(renderLoader(true));
        setTimeout(() => {
            dispatch(renderSign());
            dispatch(renderLoader(false));
        }, 3000);
    };

    // HANDLE FORM CLOSE ENDS
    // HANDLE FORM CLOSE
    const logout = () => {
        dispatch(renderLoader(true));
        setTimeout(() => {
            dispatch(logoutUser());
            dispatch(renderLoader(false));
        }, 3000);
    };
    // HANDLE FORM CLOSE ENDS


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

                {!user ? 
                <>
                    <button className='sign-button' onClick={handleCloseForm}>Sign In</button>
                    <button className='sign-button' id='sign-button' onClick={handleCloseForm}>Sign Up</button>
                </>
                :
                <button className='sign-button' id='sign-button' onClick={logout}>Logout</button>
                }

            </div>
        </div>
        {/* ENDS */}
    </div>
  );
};

