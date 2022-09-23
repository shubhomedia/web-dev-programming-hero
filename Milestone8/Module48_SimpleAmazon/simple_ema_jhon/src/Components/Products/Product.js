import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props)
    const { name, img, seller, price, stock } = props.product;
    return (
        <div className="product">
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>

                <p><small>By: {seller}</small></p>
                <p>Price: {price}</p>
                <p><small>Only {stock} Left in Stock- Order Soon</small></p>
                <button
                    onClick={() => props.handleAddToCart(props.product)}
                    className='btn-regular'>Add To Cart</button>
            </div>

        </div>
    );
};

export default Product;