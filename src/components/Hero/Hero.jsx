import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Hero.css';

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'









const Hero = () => {
  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1 }} className="hero">
      <Swiper  autoplay={{ delay: 5500 }}
        loop={true}
        pagination={{
          clickable: true,
        }} navigation={true} modules={[EffectFade,Autoplay, Navigation, Pagination]}  className="mySwiper1">
        <SwiperSlide className='swiper-slide1'>  <Link to='/promos'></Link> </SwiperSlide>
        <SwiperSlide className='swiper-slide2'>  <Link to='/promos'> </Link> </SwiperSlide>
        <SwiperSlide className='swiper-slide3'>  <Link to='/promos'></Link> </SwiperSlide>

      </Swiper>

    </motion.div>

  )
}

export default Hero
