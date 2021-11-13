import React from 'react';
import { Link } from 'react-router-dom';
import './Product.css';

const Product = ({product}) => {
    const { _id, productName,  productDescription, productPrice, productImage } = product;

    return (
        <div className="container mt-3">
            <div className="product p-3 border rounded ">
                <img className="border rounded mb-2 img-fluid" src={productImage} alt="Product" />
                <hr />
                <h3 className="text-success">{productName}</h3>
                <p className="px-3">{productDescription}</p>
                <h5 className="px-3 text-primary">Price: {productPrice}</h5>
                <Link to={`/purchase/${_id}`}>
                <button className="btn btn-warning">Purchase Product</button>
                </Link>
            </div>
        </div>
    );
};

export default Product;