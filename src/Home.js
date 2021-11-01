
import React from 'react';
import './Home.css';
import Products from './Products';


function Home() {
    return (
        <div className='home'>
            <div className='home__container'>
            <img
              className="home__image"
              src="mall.jpg"
              alt=""
            />
            
            <div className='home__row'>
               <Products 
                id='1'
                title="sport shop"
                price={29.50}
                image='sports.jpg'/>  
               <Products
               id='2'
               title='Sports shop'
               price={20.12}
               image='sport2.jpg' /> 
                   
            </div>
            <div className='home__row'>
            <Products 
                id='3'
                title='Leisure shop'
                price={55.12}
                image='leisure.jpg' /> 
            <Products 
            id='4'
            title='Leisure shop'
            price={93.10}
            image='leisure2.jpg'
             /> 
            
            </div>
            <div className='home__row'>
            <Products 
                id='5'
                title='Buiness shop'
                price={20.12}
                image='business.jpg' /> 
            <Products 
            id='6'
            title='Business Shop'
            price={12.23}
            image='business2.jpg'
             /> 
            
            </div>
            <div className='home__row'>
            <Products
             id='7'
             title='VIP shop'
             price={20.12}
             image='vip.jpg' /> 
            <Products 
             id='8'
             title='VIP shop'
             price={100.30}
             image='vip2.jpg'/>
            </div> 
            
            </div>
        </div>
    )
}

export default Home
