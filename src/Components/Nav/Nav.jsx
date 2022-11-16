import React from 'react'
import './Nav.css'
import {GoHome} from 'react-icons/go'
import {CiUser} from 'react-icons/ci'
import {BiBook} from 'react-icons/bi'
import {MdOutlineMiscellaneousServices} from 'react-icons/md'
import {RiMessage3Line} from'react-icons/ri'
import { useState } from 'react'

const Nav = () => {
  const [nav , setNav]=useState('#');
  return (
    <nav>
      <a href='#' onClick={()=>setNav('#')}    className={nav==='#'?'active':''}><GoHome /></a>
      <a onClick={()=>setNav('#about')} href='#about' className={nav==='#about'?'active':''}><CiUser /></a>
      <a onClick={()=>setNav('#experience')}    className={nav==='#experience'?'active':''} href='#experience'><BiBook /></a>
      <a onClick={()=>setNav('#services')}    className={nav==='#services'?'active':''} href='#services'><MdOutlineMiscellaneousServices /></a>
      <a onClick={()=>setNav('#contact')}    className={nav==='#contact'?'active':''} href='#contact_me'><RiMessage3Line /></a>
      
      
      
      </nav>
  )
}

export default Nav