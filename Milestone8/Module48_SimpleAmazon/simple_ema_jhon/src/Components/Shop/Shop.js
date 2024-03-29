import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Products/Product';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import './Shop.css';


const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayProducts, setdisplayProducts] = useState([]);

    useEffect(() => {
        console.log('Product API Called');
        fetch('./products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setdisplayProducts(data);
            });
    }, [])

    useEffect(() => {
        console.log('Local Storage Called');
        if (products.length) {
            const savedCart = getStoredCart();
            const storedCart = [];
            for (const key in savedCart) {
                console.log(key, savedCart[key]);
                const addedProduct = products.find(product => product.key === key);
                if (addedProduct) {
                    const quantity = savedCart[key];
                    addedProduct.quantity = quantity;
                    console.log(addedProduct);
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])

    const handleAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // Save to Local Storage
        addToDb(product.key);
    }

    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setdisplayProducts(matchedProducts);
        console.log(matchedProducts.length);
    }
    return (
        <div>
            <div className='search-container'>
                <input type='text'
                    onChange={handleSearch}
                    placeholder='Search Product' />
            </div>
            <div className='shop-container'>
                <div className="product-container">
                    {
                        displayProducts.map(product => <Product
                            key={product.key}
                            product={product}
                            handleAddToCart={handleAddToCart}
                        >

                        </Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;