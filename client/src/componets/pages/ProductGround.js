
// REDUX
import { useSelector } from "react-redux";

// STYLING
import '../styling/ProductGround.css';
import Banner from './Banner';
import Products from './Products';
import PayNow from "./PayNow";

export default function ProductGround (){

  // USE SELECTOR STATE
  const isRenderingBanner = useSelector((state) => state.userInterface.isRenderingBanner);
  const pay = useSelector((state) => state.userInterface.pay);
  // ENDS
  
  
  return (
    <div className='productGround'>

          {!isRenderingBanner ? <Banner/> : <Products/>}

          {/* POPUP */}

            {pay && (<PayNow/>)}
            
          {/* ENDS */}
  
    </div>
  );
};

