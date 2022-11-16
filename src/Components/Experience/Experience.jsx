import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {SiCss3} from 'react-icons/si'
import {FaHtml5} from 'react-icons/fa'
import {TbBrandJavascript} from 'react-icons/tb'
import {SiTailwindcss} from 'react-icons/si'
import {BsBootstrapFill} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'

const Experience = () => {
  return (
    <section  id='experience'>
      <h5 style={{'text-transform':'uppercase'}}>Skills I have</h5>
      <h2  style={{'text-transform':'uppercase'}}>My Experience</h2>
      <div className="container experience__container">
<div className="experience__frontend">
  <h3  style={{'text-transform':'uppercase'}}>Frontend Development</h3>
  <div className="experience__content">
    <article className='experience__details'>
      <BsPatchCheckFill className='icon'/>
    <div> <h4>HTML</h4>
      <small>Experienced</small></div> 

    </article>
    <article className='experience__details'>
      <BsPatchCheckFill className='icon'/>
     <div> <h4>CSS</h4>
      <small>Experienced</small></div>

    </article>
    <article className='experience__details'>
      <BsPatchCheckFill className='icon'/>
     <div><h4>BOOTSTRAP</h4>
      <small>Experienced</small></div> 

    </article>
    <article className='experience__details'>
      <BsPatchCheckFill className='icon'/>
     <div> <h4>JAVASCRIPT</h4>
      <small>Experienced</small></div>

    </article>
    <article className='experience__details'>
      <BsPatchCheckFill className='icon'/>
    <div> <h4 >REACT.JS</h4>
      <small>Experienced</small></div> 

    </article>
    <article className='experience__details'>
      <BsPatchCheckFill className='icon'/>
    <div> <h4>TAILWIND</h4>
      <small>Experienced</small></div> 

    </article>
  </div>
</div>
<div className='stage-cube-cont' >
<div className="cubespinner">
  <div className="face1">
  <FaHtml5  style={{'color':'#F06529'}}/>

  </div>
  <div className="face2" >
<SiCss3 style={{'color':'#DD0031'}}/>
  </div>
  <div className="face3">
   <TbBrandJavascript  style={{'color':'#28A4D9'}}/>

  </div>
  <div className="face4">
<SiTailwindcss  style={{'color':'#5ED4F4'}}/>
  </div>
  <div className="face5">
<BsBootstrapFill  style={{'color':'#EFD81D'}}/>
  </div>
  <div className="face6">
<FaReact  style={{'color':'#EC4D28'}}/>
  </div>


</div>
</div>


      </div>



    </section>
  )
}

export default Experience