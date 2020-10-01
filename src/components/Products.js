import React, { Fragment } from "react";
import formatCurrency from "../util"
export default function ({products}) {

  return (
    <Fragment>
      <div>
        <ul className="products">
          {products.map((product) => (
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
