import React from 'react'


function Filter({sortProducts,filterProducts,size,count}) {
    
     

    return (
        <div className="filter">
            <div className="filter-result">{count} Products</div>
            <div className="filter-sort">Order {""}
            <select value={size} onChange={sortProducts}>
                <option>Sort Products</option>
                <option value="lowest">Lowest</option>
                <option value="highest">Highest</option>
                <option value="latest">Latest</option>
            </select>
            </div>
            <div className="filter-size">
                Filter {""}
                <select value={size} onChange={filterProducts} >
                    <option value="ALL">ALL</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    </select>
                    </div>
        </div>
    )
}

export default Filter
















































