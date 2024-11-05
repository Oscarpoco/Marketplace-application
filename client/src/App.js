import React from 'react';
// REDUX
import { useSelector } from 'react-redux';
// ENDS

// STYLING
import './App.css';
import Navigation from './componets/pages/Navigation.js';
import ProductGround from './componets/pages/ProductGround.js';
import SideBar from './componets/pages/sideBar.js';
import Loader from './componets/pages/Loader.js';

function App() {

  // USE SELECTOR
  const isLoading  = useSelector((state) => state.userInterface.isLoading);
  // ENDS

  return (
    <div className="App">

        {/* NAVIGATION */}
        <nav>
          <Navigation/>
        </nav>
        {/* NAV ENDS */}

        {/* MAIN */}
        <main>

          {/* SIDEBAR */}
          <SideBar/>
          {/* ENDS */}

          {/* PRODUCTS GROUND */}
          <ProductGround/>
          {/* ENDS */}

        </main>
        {/* MAIN ENDS */}

        {/* POPUPS */}
        {isLoading && (<Loader/>)}
        {/* POPUPS ENDS*/}
    </div>
  );
}

export default App;
