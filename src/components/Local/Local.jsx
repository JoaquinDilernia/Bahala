import React from 'react'
import './Local.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Local = () => {
  return (
    <section className='local'>
      <h1>Local</h1>
      <div className='contenedor'>

        <div className='contenedor-swiper'>
          <Swiper loop={true}
            pagination={{
              clickable: true,
            }} navigation={true} modules={[Navigation, Pagination]} className="mySwiper2">
            <SwiperSlide className='swiper-slide'> Slide 1</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 2</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 3</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 4</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 5</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 6</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 7</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 8</SwiperSlide>
            <SwiperSlide className='swiper-slide'>Slide 9</SwiperSlide>
          </Swiper>
        </div>

        <div className='mapa'>
          <a href="https://goo.gl/maps/EenGE7LrfPuQns1t5">como llegar?</a>
        </div>
      </div>



    </section>
  )
}

export default Local
