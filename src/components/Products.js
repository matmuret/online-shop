import React, { Fragment } from "react";
import Data from "../Data.json";
import formatCurrency from "../util"
export default function () {
  const product = Data;
  /* console.log(product) */
  return (
    <Fragment>
      <div>
        <ul className="products">
          {product.products.map((product) => (
            <li key={product.id}>
              <div className="product">
                <a href={"#" + product._id}>
            
                    <img src={product.image} alt={product.title}></img>
              
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{formatCurrency(product.price)}</div>
                  <button className="button primary">Add to Cart</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}
