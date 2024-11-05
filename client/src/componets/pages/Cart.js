// REDUX
import {useDispatch} from 'react-redux';

// COMPONENTS FROM USERINTERFACE ACTIONS
import {renderLoader } from '../../redux/actions/userInterFaceActions.js';

// STYLING
import '../styling/Cart.css';

// ICONS

export default function Cart (){

    // USE DISPATCH
    const dispatch = useDispatch();
    // ENDS
    

    // HANDLE OPENING PRODUCTS
    const handleOpenProducts = () => {
        
        dispatch(renderLoader(true));
        setTimeout(()=>{
            
            dispatch(renderLoader(false));
        }, 3000);
        }
    // ENDS


  return (
    <div className='Cart'>

        {/* Cart */}
           
        {/* ENDS */}
        

    </div>
  );
};

