import React from 'react'
import './home.css'
import Truck from './truck.png'
import Transparent from './transparent.png'
import Transaction from './Transaction.png'

const Home = () => {
    return (
        <div className='parent'>
            <div className='left'>
                <img src={Truck} alt='driver' />
                <h1><span>Welcome to MyFast</span>X Partner</h1>
                <h1>Quick & Reliable Delivery and Logistics Solution</h1>
                <p>At MyFastX, we are revolutionizing the delivery and logistics industry by providing swift, dependable services to our clients. Our mission is to ensure every package reaches its destination on time, every time.</p>
            </div>
            <div className='right'>
                <img src={Transparent} alt='background' />
                <div className='middle'>
                    <p>Drive Your Success with MyFastX</p>
                    <h1>Join Us a Partner Driver</h1>
                    <p>Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part of a dynamic network of drivers. With us, you’ll enjoy flexible work hours, competitive earnings, and the satisfaction of delivering smiles across the city.
                    </p>
                    <button>Register now for just Rs. 999!</button>
                </div>
                <div className='last'>
                    <div className='card'>
                        <img src={Transaction} alt='logo' />
                        <p>Reliable Income</p>
                        <p>Earn a steady income with consistent delivery requests.</p>
                    </div>
                    <div className='card'>
                        <img src={Transaction} alt='logo' />
                        <p>Reliable Income</p>
                        <p>Earn a steady income with consistent delivery requests.</p>
                    </div>
                    <div className='card'>
                        <img src={Transaction} alt='logo' />
                        <p>Reliable Income</p>
                        <p>Earn a steady income with consistent delivery requests.</p>
                    </div>
                    <div className='card'>
                        <img src={Transaction} alt='logo' />
                        <p>Reliable Income</p>
                        <p>Earn a steady income with consistent delivery requests.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
