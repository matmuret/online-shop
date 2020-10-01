//feature 1
import React, { useState } from "react";
import Data from "./Data.json";
import Products from "./components/Products";
import Filter from "./components/Filter"

function App() {
 const [products, setProducts]= useState(Data.products)
 const [size]= useState("")
 
// Sort Products
const sortProducts=(event)=>{   
 const sort=event.target.value
 setProducts(
 Data.products.slice()
 .sort((a,b)=>{   
if(sort==="lowest"){
  if(a.price<b.price){
    return -1
  } else {
    return 1
  }
} else if(sort==="highest"){
  if(a.price>b.price){
    return -1
  } else {
    return 1
  }
}
else if(sort==="latest"){
  if(a._id>b._id){
    return -1
  } else {
    return 1
  }
}
}
 ))}

 //Available Sizes
 const filterProducts=(event)=>{
 if(event.target.value!==""){
   setProducts(Data.products.filter(product=>product.availableSizes.includes(event.target.value)))
 }
   
 }
 console.log(products)
    
  return (
    <div className="grid-container">
      <header>
        <a href="/">React Shopping Cart</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter count={products.length} size={size}  filterProducts={filterProducts} sortProducts={sortProducts}/>
            <Products products={products}/></div>
        
          <div className="sidebar">Cart Items</div>
        </div>
      </main>
      <footer>All right is reserved</footer>
    </div>
  );
}


export default App;
