import React, { useEffect, useState } from 'react';
import Product from '../product/product';
import Sidecart from '../Sidecart/Sidecart';
import './Shop.css'


const Shop = () => {

    const [products,setProducts]=useState([])


    useEffect(()=>{

        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')

        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])


    const [totalPrice,setTotalprice]=useState('0')



    // const getTotal = (price)=>{

    //     productQuantity=productQuantity+1;
    //     productPrice=productPrice+price;

    // }


    const [cartitems,getCartItems]=useState([])



 
    function getCart(product){


        let newCartItems=[...cartitems,product]

        localStorage.setItem('cart',newCartItems)

        getCartItems(newCartItems)

        console.log(newCartItems)
    }

    

    
    

    return (
        <div className='shop-container'>

            <div className="products-container">


            {
                    products.map(product => <Product
                    
                    key={product.id}
                    product={product}
                    getCart={getCart}
                    ></Product>)
            }
                
            </div>

            <div className="cart-container">
                <Sidecart
                    cartitems={cartitems}
                ></Sidecart>
            </div>
            
        </div>
    );
};

export default Shop;