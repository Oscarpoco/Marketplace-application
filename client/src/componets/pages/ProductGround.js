
// REDUX
import { useSelector } from "react-redux";

// STYLING
import '../styling/ProductGround.css';
import Banner from './Banner';
import Products from './Products';
import PayNow from "./PayNow";
import Cart from "./Cart";
import AddItem from "./AddProduct";

export default function ProductGround (){

  // USE SELECTOR STATE
  const isRenderingBanner = useSelector((state) => state.userInterface.isRenderingBanner);
  const pay = useSelector((state) => state.userInterface.pay);
  const addToCart = useSelector((state) => state.userInterface.addToCart);
  const openAddItem = useSelector((state) => state.userInterface.openAddItem);
  // ENDS
  
  
  return (
    <div className='productGround'>

          {!isRenderingBanner ? <Banner/> : <Products/>}

          {/* POPUP */}

            {pay && (<PayNow/>)}

            {openAddItem && (<AddItem/>)}

            {/* {addToCart && (<Cart/>)} */}
            
          {/* ENDS */}
  
    </div>
  );
};

