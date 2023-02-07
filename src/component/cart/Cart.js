import React from 'react';
import { Link } from 'react-router-dom';

const cart = (props) => {
    const cart=props.cart;
    // const total=cart.reduce((total,pd)=>total+pd.price,0)
    let total=0;
    for(let i=0;i<cart.length; i++){
        const product=cart[i];
        total=total+product.price;
        
    }
    let shiping=0;
     if (total>35){
        shiping=0;
     }
    else if(total>15){
        shiping=4.99;
    }
   
    else if(total>0){
        shiping=12.99
    }
    const tax=(total/10).toFixed(2) ;
    const grandtotal=(total+shiping+Number(tax)).toFixed(2);
    return (
        <div>
            <h4> order summary</h4>
            <p> Items Ordered: {cart.length}</p>
            <p><small>Product price{total}</small></p>
            <p><small>Shiping cost: $ {shiping}</small></p>
            <p><small>Tax {tax}</small></p>
            <p>total price: ${grandtotal}</p>
            <Link to='/review'>  <button className='main-button'>Review Order</button></Link>            
        </div>
    );
};

export default cart;