import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product)
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{props.product.name}</h4>

                <p><small>By:{seller}</small></p>
                <p>Price:{price}</p>
                <p><small>Only {stock} Left in Stock- Order Soon</small></p>
            </div>

        </div>
    );
};

export default Product;