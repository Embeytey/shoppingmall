import React from 'react';
import './Checkout.css';
import SubTotatal from './SubTotatal';

function Checkout() {
    return (
        <div className='checkout'>
            <div className='checkout__left'> 
                <img className='checkout__ad' src='shopbanner.jpg' alt=''/>
             
            <div >
                <h1 className='checkout__title'>the shoping cart</h1>
            </div> 
            </div> 
            <div className='checkout__right'>
                <h2>the subtotal will go here</h2>
                <SubTotatal/>
            </div> 
        </div>
    )
}

export default Checkout
