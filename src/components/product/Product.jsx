import React from 'react';

import './Product.css'


const Product = (props) => {

    console.log(props.product)
    const {name,seller,price,img,ratings}=props.product

    return (
        <div className='single-product'>

            <img className='product-img' src={props.product.img} alt="" />
            <p>Product Name: {name}</p>
            <p>seller: {seller}</p>
            <div className="price-rating">
                <p className='price'>price: ${price}</p>
                <p className='rating'>ratings: {ratings}</p>
            </div>
            <div className="">
                <button className='add-to-cart'>Add To cart</button>
            </div>
        </div>
    );
};

export default Product;