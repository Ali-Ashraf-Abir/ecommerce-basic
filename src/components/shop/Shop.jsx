import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart} from '../../utilities/fakedb';
import Product from '../product/product';
import Sidecart from '../Sidecart/Sidecart';
import './Shop.css'


const Shop = () => {

    const [products,setProducts]=useState([])


    useEffect(()=>{

        fetch('products.json')

        .then(res=>res.json())
        .then(data=>setProducts(data))

    },[])


    const [totalPrice,setTotalprice]=useState('0')



    // const getTotal = (price)=>{

    //     productQuantity=productQuantity+1;
    //     productPrice=productPrice+price;

    // }


    const [cartitems,getCartItems]=useState([])



    useEffect(()=>{


        const storedCart= getShoppingCart()
        const savedCart=[]
        for (const id in storedCart){

            const savedProducts=products.find(product => product.id === id)

            if(savedProducts){

                const quantity = storedCart[id]

                savedProducts.quantity=quantity

                savedCart.push(savedProducts)
    
            }

        }

        getCartItems(savedCart)

    },[products])

 
    function getCart(product){


        let newCartItems=[...cartitems,product]

        

        getCartItems(newCartItems)

        addToDb(product.id)

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