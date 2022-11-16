import React from 'react'
import './About.css'
import img from '../../Assets/2.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderActive} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>
        Get To Know
      </h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">

          <div className="about__me-image">
            <img src={img} alt="My image" />


          </div>
        </div>
        <div className="about__content">

          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='icon'/>
              <h5>Experience</h5>
              <small>3+ Months of working Experience</small>


            </article>
            
            <article className='about__card'>
              <VscFolderActive className='icon'/>
              <h5>Porjects</h5>
              <small>10+ Projects</small>


            </article>
          

          </div>
          <p>
            I am a Fresh Graduate and have completed Software Engineering from comsats University. My expertise is in web Development. I have done internship as a React Developer in Fauji Towers and working as a free lancer in front end development.I have done several frontend projects and looking for some opportunity to start my career.
            </p>
            <div className='button'>
            <a href='#contact_me' className='btn btn-primary'>Contact Me</a>
            </div>

        </div>





      </div>



    </section>
  )
}

export default About