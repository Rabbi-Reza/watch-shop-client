import React, { useState, useEffect } from 'react';
import Product from '../Product/Product';

const ExploreProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://shrouded-dusk-10588.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    return (
        <div>
            {
                products.map(product =>  <Product
                    key={product._id}
                    product={product}></Product> )
            }
        </div>
    );
};

export default ExploreProducts;