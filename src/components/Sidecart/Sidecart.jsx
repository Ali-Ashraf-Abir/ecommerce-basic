import React from 'react';
import { useState } from 'react';
import './Sidecart.css'

const Sidecart = ({cartitems}) => {




    let cartItems=JSON.parse(localStorage.getItem('itemID'))
    
    let totalPrice=0
    let totalShipping=0

    for(let items of cartitems){

        totalPrice=totalPrice+items.price
        totalShipping=totalShipping+items.shipping


    }


    let tax=parseInt(totalPrice*0.07).toFixed(2)


    let grandTotal=totalPrice+totalShipping+parseFloat(tax);

    console.log(totalPrice)



    return (
        <div className='side-cart'>
            <h2>Your Cart</h2>
            <p>Total products:${cartitems.length}</p>
            <p>Total product cost:${totalPrice}</p>
            <p>Total shipping:${totalShipping}</p>
            <p>Total tax:${tax}</p>
            <p>Grand Total:${grandTotal}</p>
            <button className='cart-button'>See Your Proudcts</button>
        </div>
    );
};

export default Sidecart;