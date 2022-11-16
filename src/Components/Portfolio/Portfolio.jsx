import React from 'react'
import './portfolio.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import One from '../../Assets/1.png'
import Two from '../../Assets/2.png'
import Three from '../../Assets/33.png'
import Four from '../../Assets/4.png'
import Five from '../../Assets/5.png'
import Six from '../../Assets/6.png'
import Seven from '../../Assets/7.png'
import 'swiper/css'

const Portfolio = () => {
  return (
   <div className="portfolio">
    <h5>Recent Projects</h5>
    <h2>Portfolio</h2>

    <Swiper
    spaceBetween={0}
    slidesPerView={3}
    grabCursor={true}
    className="portfolio-slider">
      <SwiperSlide>
        <img src={One} alt="One"/>
        </SwiperSlide>
        <SwiperSlide> 
           <img src={Two} alt="One"/>
           </SwiperSlide>

           <SwiperSlide> 
                   <img src={Three} alt="One"/> 
                   </SwiperSlide>
           <SwiperSlide>
                   <img src={Four} alt="One"/>
                   </SwiperSlide>
           <SwiperSlide>   
            <img src={Five} alt="One"/>
           </SwiperSlide>
           <SwiperSlide>  
                   <img src={Six} alt="One"/>
                   </SwiperSlide>
           <SwiperSlide> 
                  <img src={Seven} alt="One"/>
           </SwiperSlide>

      


    </Swiper>
   </div>
  )
}

export default Portfolio