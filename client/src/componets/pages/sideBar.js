import React from 'react';

// STYLING
import '../styling/SideBar.css';

// ICONS
import { TbHomeCheck } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";
import { RiFunctionAddLine } from "react-icons/ri";
import { FaCartArrowDown } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";

export default function SideBar (){
  return (
    <div className='SideBar'>
        <aside>

            <div className='SideBar-Icons-wrapper'>
                <TbHomeCheck className='SideBar-Icons'/>
            </div>

            <div className='SideBar-Icons-wrapper'>
                <CiHeart className='SideBar-Icons'/>
            </div>

            <div className='SideBar-Icons-wrapper'>
                <RiFunctionAddLine className='SideBar-Icons'/>
            </div>

            <div className='SideBar-Icons-wrapper'>
                <FaCartArrowDown className='SideBar-Icons' style={{color: 'rgb(110, 163, 30)'}}/>
            </div>

            <div className='SideBar-Icons-wrapper' id='SideBar-Icons-logout-wrapper'>
                <FaRegUserCircle className='SideBar-Icons'/>
            </div>

        </aside>
    </div>
  );
};

