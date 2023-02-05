import React from 'react';

const cart = (props) => {
    const cart=props.cart;
    const total=cart.reduce((total,pd)=>total+pd.price,0)
    return (
        <div>
            <h4> order summary</h4>
            <p> Items Ordered:{cart.length}</p>
            <p>total price:{total}</p>
            
        </div>
    );
};

export default cart;