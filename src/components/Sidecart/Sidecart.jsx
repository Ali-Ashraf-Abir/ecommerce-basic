import React from 'react';
import './Sidecart.css'

const Sidecart = () => {
    return (
        <div className='side-cart'>
            <h2>Your Cart</h2>
            <p>Total products:{[]}</p>
            <p>Total product cost:{[]}</p>
            <p>Total tax:{[]}</p>
            <p>Total cost:{[]}</p>
            <button className='cart-button'>See Your Proudcts</button>
        </div>
    );
};

export default Sidecart;