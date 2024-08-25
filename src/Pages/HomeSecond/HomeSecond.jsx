import React from 'react'
import Logo from './user.png'
import './homeSecond.css'
import Vehicle from './vehicle.png'
import bg from './bg.png'
import stars from './Star.png'
import Avatar from './avataar.png'

const HomeSecond = () => {
  return (
    <div className='main'>
      <div className='first'>
        <div className='side'>
          <div className='heading'>
            <button>How it Works</button>
            <h1>Simple Steps to get Started</h1>
            <hr></hr>
          </div>
          <div className='cards'>
            <div className='card' style={{ marginTop: 20 }}>
              <img src={Logo} alt='logo' />
              <hr></hr>
              <div>
                <h6>Register Online</h6>
                <p>Fill out our easy online application form and pay the registration fee of Rs. 999</p>
              </div>
            </div>
            <div className='card'>
              <img src={Logo} alt='logo' />
              <hr></hr>
              <div>
                <h6>Register Online</h6>
                <p>Fill out our easy online application form and pay the registration fee of Rs. 999</p>
              </div>
            </div>
            <div className='card'>
              <img src={Logo} alt='logo' />
              <hr></hr>
              <div>
                <h6>Register Online</h6>
                <p>Fill out our easy online application form and pay the registration fee of Rs. 999</p>
              </div>
            </div>
          </div>
        </div>
        <div className='image'>
          <img src={Vehicle} alt='heroImg' />
        </div>
      </div>
      <div className='next'>
        <div className='one'>
          <div className='heading'>
            <button>What our Partners Says?</button>
            <h1>Testimonials</h1>
            <hr></hr>
          </div>
          <p>At MyFastX, our commitment to excellence is reflected in the feedback from our valued customers. Here's what they have to say about their experiences with our quick and reliable delivery and logistics services</p>
          <div className='flex-img'>
          <img src={bg} alt='background'></img>
          <img src={bg} alt='background'></img>
          </div>
        </div>
        <div className='two'>
          <div className='avatar'>
            <img src={Avatar} alt='avatar'></img>
            <div>
              <p>James Darwin</p>
              <p style={{fontSize:12}}>Kolkata, West Bengal</p>
            </div>
          </div>
          <p style={{fontSize:15}}>“ Joining MyFastX has been a game-changer for me. The flexible hours and reliable income have made my life so much easier. “</p>
          <div className='star'>
            <img src={stars} alt='stars'></img>
            <img src={stars} alt='stars'></img>
            <img src={stars} alt='stars'></img>
            <img src={stars} alt='stars'></img>
            <img src={stars} alt='stars'></img>
          </div>
        </div>
      </div>
      <div className='footer'>
        <p style={{color:"green"}}>Drive Your Success with MyFastX</p>
        <h2>Join Us a Partner Driver</h2>
        <p>Are you a vehicle owner looking for new opportunities? Join MyFastX today and become part of a dynamic network of drivers. With us, you’ll enjoy flexible work hours, competitive earnings, and the satisfaction of delivering smiles across the city.
        </p>
        <button>Register now for just Rs. 999!</button>
      </div>
    </div>
  )
}

export default HomeSecond
