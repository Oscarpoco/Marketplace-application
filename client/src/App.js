

// STYLING
import './App.css';
import Navigation from './componets/pages/Navigation';
import ProductGround from './componets/pages/ProductGround';
import SideBar from './componets/pages/sideBar';

function App() {
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
    </div>
  );
}

export default App;
