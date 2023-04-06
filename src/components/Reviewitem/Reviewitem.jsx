import React from 'react';
import './Reviewitem.css'


const Reviewitem = ({product,handleRemoveFromCart}) => {


    const {id,name,seller,price,img,ratings}=product


    return (
        <div className="review-item-container">
        <div className='review-item'>
            <div className="product-image-container">
                <img className='product-image' src={img} alt="" />
            </div>
            <div className="">
                <div className="">
                <h3>{name}</h3>
                </div>
                <div className="review-details">
                    <h4>price:${price}</h4>
                    <h4>Shipping:${product.shipping}</h4>
                    <h4>Quantity:{product.quantity}</h4>
                </div>
            </div>
            <div className="delete-button-container">
                <button onClick={()=>handleRemoveFromCart(id)} className='delete-button'>Delete</button>
            </div>
        </div>
        </div>
    );
};

export default Reviewitem;