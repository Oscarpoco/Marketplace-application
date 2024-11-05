// REDUX
import {useDispatch} from 'react-redux';

// COMPONENTS FROM USERINTERFACE ACTIONS
import { renderBanner, renderLoader } from '../../redux/actions/userInterFaceActions.js';

// STYLING
import '../styling/ProductGround.css';

// ICONS

export default function Banner (){

    // USE DISPATCH
    const dispatch = useDispatch();
    // ENDS
    

    // HANDLE OPENING PRODUCTS
    const handleOpenProducts = () => {
        
        dispatch(renderLoader(true));
        setTimeout(()=>{
            dispatch(renderBanner());
            dispatch(renderLoader(false));
        }, 3000);
        }
    // ENDS


  return (
    <div className='Banner'>

        {/* CONTAINER LEFT */}
            <div className='container-left'>

                <img src='headphones.jpeg' alt='Product 1'/>

                <div className='container-left-content'>
                    <h2>New Arrivals</h2>
                    <h3>PlayStation 5</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button className='btn-add' onClick={handleOpenProducts}>Browse More</button>
                </div>

            </div>
        {/* ENDS */}

        {/* CONTAINER RIGHT */}
            <div className='container-right'>
                <img src='ps5.jpeg' alt='Product 1'/>
                <button className='btn-buy' onClick={handleOpenProducts}>Browse More</button>
            </div>
        {/* ENDS */}
        

    </div>
  );
};

