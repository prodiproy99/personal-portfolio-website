import React from 'react';
// import { useRef, useState } from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";
import Portfolio1 from '../../images/slider/slider.png'
import Portfolio2 from '../../images/slider/slider2.png'
import Portfolio3 from '../../images/slider/slider3.png'

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import "./MyPortfolio.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper";

const MyPortfolio = () => {
  return (
    <div id='portfolio' className='mb-32 mt-24'>
      <h2 className='text-3xl text-center font-bold uppercase mb-5'>My <span style={{ color: "#ff014f" }}>Portfolio</span></h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        autoplay={true}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <a href="https://prodiproy99.github.io/influencer-gear-responsive-website/" target="_blank" rel="noopener noreferrer"><img src={Portfolio1} alt='' /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://dapper-zuccutto-c8ca13.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={Portfolio2} alt='' /></a>
        </SwiperSlide>
        <SwiperSlide>
        <a href=" https://stellar-crisp-909536.netlify.app/" target="_blank" rel="noopener noreferrer"><img src={Portfolio3} alt='' /></a>
        </SwiperSlide> 
      </Swiper>
    </div>
  );
};

export default MyPortfolio;