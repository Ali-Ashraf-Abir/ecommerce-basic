import React from 'react';
import { useState } from 'react';
import './Sidecart.css'

const Sidecart = ({cartitems,handleClearCart,children}) => {




    let cartItems=JSON.parse(localStorage.getItem('itemID'))
    
    let totalPrice=0
    let totalShipping=0
    let quantity=0

    for(let items of cartitems){

        if(items.quantity ===0){
            items.quantity=1
        }

        totalPrice=totalPrice+items.price*items.quantity
        totalShipping=totalShipping+items.shipping
        quantity=quantity+items.quantity


    }


    let tax=parseInt(totalPrice*0.07).toFixed(2)


    let grandTotal=totalPrice+totalShipping+parseFloat(tax);

    console.log(totalPrice)



    return (
        <div className='side-cart'>
            <h2>Your Cart</h2>
            <p>Total products:{quantity}</p>
            <p>Total product cost:${totalPrice}</p>
            <p>Total shipping:${totalShipping}</p>
            <p>Total tax:${tax}</p>
            <p>Grand Total:${grandTotal}</p>
            <button onClick={handleClearCart} className='delete-cart-button'>Clear Cart</button>
            {children}
            
        </div>
    );
};

export default Sidecart;