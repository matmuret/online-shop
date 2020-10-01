//feature 1
import React from "react";
/* import Data from "./data.json"; */
import Products from "./components/Products"

function App() {
 

  

  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main"><Products/></div>
        
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All right is reserved</footer>
    </div>
  );
}

export default App;
