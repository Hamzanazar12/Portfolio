import React from 'react'
import './Header.css'
import {ImLinkedin} from 'react-icons/im'
import {BsFacebook} from 'react-icons/bs'

const Social = () => {
  return (
    <div className='header__social'>
        <a href='https://www.linkedin.com/in/hamza-nazar-414797171/'><ImLinkedin size={28}/></a>
        <a href='https://www.facebook.com/hamza.nazar.5/'><BsFacebook size={28}/></a>


    </div>
  )
}

export default Social