import React from 'react'
import './services.css'

import Card from './Card'
import { motion } from "framer-motion";
import {CgIfDesign} from 'react-icons/cg'
import {MdDeveloperMode} from 'react-icons/md'
import {BsFillCameraVideoFill} from 'react-icons/bs'


const Services = ({}) => {
  
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <section className='service'>
      <h5>My</h5>
        <h2>Services</h2>
    <section className='services' id='services'>
       
      

      <div className="awesome">
       
        <span>As a Frontend Developer<br/>
        I provide the following services:</span>

      </div>
      <div className="cards">
     
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
         
          <Card
            emoji={<CgIfDesign  />}
            heading={"Graphic Design"}
            detail={"Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "10rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={<MdDeveloperMode color='rgb(240, 101, 41'/>}
            heading={"Web Developer"}
            detail={"Html, Css, Bootstrap, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "21rem", left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
        
            emoji={<BsFillCameraVideoFill color='#dd0031'/>}
            heading={"Video Editing"}
            detail={
              "Adobe After-Effects, Filmora,"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>




      </div>
    </section></section>
  )
}

export default Services