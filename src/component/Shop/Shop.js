import React, { useState } from 'react';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../cart/Cart';

const Shop = () => {
    const first10 =fakeData.slice(0,10);
const [products, setProducts]=useState(first10);
const[cart,setcart]=useState([]); 




const handleAddProduct=(product)=> {
    console.log('product added',product);
    const newCart=[...cart, product];
    setcart(newCart);
}

    return (
        <div className="shop-container">
           
            <div className="product-container">
            
            { products.map(pd=> <Product handleAddProduct={handleAddProduct} product={pd} key={pd.key}></Product>)}   
              

            </div>

            <div className="cart-container">
        <Cart cart={cart}></Cart>
   

            </div>

        

        </div>
    );
};

export default Shop;