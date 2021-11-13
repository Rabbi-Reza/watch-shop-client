import React, { useState, useEffect } from 'react';
import Product from '../../Explore/Product/Product';
import './Products.css';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-dusk-10588.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div>
            <h2 className="text-primary mt-5"> Top Products </h2>
            <div className="product-container">
            {
                products.slice(0,6).map(product => <Product
                    key={product._id}
                    product={product}></Product>)
            }
        </div>
        </div>
    );
};

export default Products;