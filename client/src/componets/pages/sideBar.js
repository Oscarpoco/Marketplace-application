import React from 'react';

// REDUX
import {useDispatch, useSelector} from 'react-redux';

// COMPONENTS FROM USERINTERFACE ACTIONS
import { renderBanner, renderLoader, renderAddToCart } from '../../redux/actions/userInterFaceActions.js';

// STYLING
import '../styling/SideBar.css';

// ICONS
import { TbHomeCheck } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RiFunctionAddLine } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

export default function SideBar (){

    // USE DISPATCH
    const dispatch = useDispatch();
    // ENDS
    

    // HANDLE OPENING PRODUCTS
    const handleCloseProducts = () => {
        
        dispatch(renderLoader(true));
        setTimeout(()=>{
            dispatch(renderBanner());
            dispatch(renderLoader(false));
        }, 3000);
        }
    // ENDS

    // HANDLE OPENING PRODUCTS
    const handleAddToCart = () => {
        
        dispatch(renderLoader(true));
        setTimeout(()=>{
            dispatch(renderAddToCart());
            dispatch(renderLoader(false));
        }, 3000);
        }
    // ENDS

  return (
    <div className='SideBar'>
        <aside>

            <div className='SideBar-Icons-wrapper' onClick={handleCloseProducts}>
                <TbHomeCheck className='SideBar-Icons'/>
            </div>

            <div className='SideBar-Icons-wrapper'>
                <CiHeart className='SideBar-Icons'/>
            </div>

            <div className='SideBar-Icons-wrapper'>
                <RiFunctionAddLine className='SideBar-Icons'/>
            </div>

            <div className='SideBar-Icons-wrapper' onClick={handleAddToCart}>
                <FaCartArrowDown className='SideBar-Icons' style={{color: 'rgb(110, 163, 30)'}}/>
            </div>

            <div className='SideBar-Icons-wrapper' id='SideBar-Icons-logout-wrapper'>
                <FaRegUserCircle className='SideBar-Icons'/>
            </div>

        </aside>
    </div>
  );
};

