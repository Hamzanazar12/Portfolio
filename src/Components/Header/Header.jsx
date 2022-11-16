import React from 'react'
import './Header.css'
import CTA from './CTA'
import image from '../../Assets/3.png'
import Social from './Social'

const Header = () => {
  return (
    <header id='home'>
      <div className='container header__container'>

<h5>Hey!</h5>
<h1>I am Hamza Bin Nazar</h1>
<h5 className='text-light'>Sofware Engineer</h5>
<CTA/>
<Social/>
<div className="me">
<img src={image} alt="me"/>
</div>
<a href='#contact' className='scroll__down'>Scroll down</a>


      </div>




    </header>
  )
}

export default Header