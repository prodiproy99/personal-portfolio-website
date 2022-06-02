import React from 'react';
// import { useRef, useState } from "react"; 
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div id='portfolio' className='mb-32 mt-32'>
      <h2 className='text-3xl text-center font-bold uppercase mb-5'>My <span style={{ color: 'orange' }}>Portfolio</span></h2>
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
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyPortfolio;