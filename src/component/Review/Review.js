import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart } from '../../utilities/databaseManager';
import ReviewItem from '../Reviewitem/ReviewItem';

const Review = () => {
    const [cart, setCart]=useState([]);
    useEffect(()=> {
        //cart
        const savedCart= getDatabaseCart();
        const productKeys=Object.keys(savedCart);
        const cardProducts =productKeys.map(key=>{
            const product=fakeData.find(pd=>pd.key===key);
            product.quantity=savedCart[key];
            return product;
        });
       setCart(cardProducts);
    }, [])
    return (
        <div>
            <h2>Card Items {cart.length}</h2>
            {
                cart.map(pd=><ReviewItem  key={pd.key}product={pd}> </ReviewItem>
            )}
        </div>
    );
};

export default Review;