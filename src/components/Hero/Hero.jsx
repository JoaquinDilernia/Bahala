import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Hero.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';




const Hero = () => {
  return (
    <div className="hero">
      <Swiper   loop={true}
        pagination={{
          clickable: true,
        }} navigation={true} modules={[Navigation, Pagination]} className="mySwiper1">
        <SwiperSlide className='swiper-slide'> Slide 1</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 5</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 6</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 7</SwiperSlide>
        <SwiperSlide className='swiper-slide'> Slide 8</SwiperSlide>
        <SwiperSlide className='swiper-slide'>Slide 9</SwiperSlide>
      </Swiper>

      </div>

  )
}

export default Hero
