import { getShoppingCart } from "../../utilities/fakedb"

const cartLoader= async ()=>{

const loadProducts= await fetch('products.json')
const products= await loadProducts.json()

const storedCarts=getShoppingCart()
const cartitems=[]


for (const id in storedCarts){
    const addedProduct=products.find(pd => pd.id===id)

    if(addedProduct){
        const quantity = storedCarts[id];
        addedProduct.quantity = quantity
        cartitems.push(addedProduct)
    }



}


return cartitems;
}

export default cartLoader;