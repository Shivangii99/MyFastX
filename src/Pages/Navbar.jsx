import React from 'react'
import Logo from './logo.png'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='parent'>
      <div className='main'>
        <img src={Logo} alt='Logo'/>
        <div className='buttons'>
            <button>Signup</button>
            <button>Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
