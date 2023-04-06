import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Product from '../product/product';
import Reviewitem from '../Reviewitem/Reviewitem';
import Sidecart from '../Sidecart/Sidecart';
import './Oreders.css'



const Orders = (props) => {


    const products=useLoaderData()

    const [cart,setCart]=useState(products)

    const handleRemoveFromCart=(id)=>{

        const remaining=cart.filter(product => product.id !==id)
        setCart(remaining)
        removeFromDb(id)
 

    }



    return (
        <div className='shop-container'>

            <div className="review-container">
            {
                cart.map(product => <Reviewitem
                
                    key={product.id}
                    product={product}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Reviewitem>)
            }
            </div>
            
            <div className="order-cart-container">
                <Sidecart cartitems={cart}></Sidecart>
            </div>
        </div>
    );
};

export default Orders;