import React from 'react'
import './Local.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion'


const Local = () => {
  return (
    <>

    <section className='local'>
      <h1>Local</h1>

      <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1 }} className="hero">
      <Swiper  autoplay={{ delay: 5500 }}
        loop={true}
        slidesPerView={3}
        spaceBetween={15}
        pagination={{
          clickable: true,
        }} navigation={true} modules={[EffectFade,Autoplay, Navigation, Pagination]}  className="mySwiper-local">
        <SwiperSlide className='swiper-slide-local-1'>  </SwiperSlide>
        <SwiperSlide className='swiper-slide-local-2'>   </SwiperSlide>
        <SwiperSlide className='swiper-slide-local-1'>  </SwiperSlide>
        <SwiperSlide className='swiper-slide-local-2'>   </SwiperSlide>
        <SwiperSlide className='swiper-slide-local-1'>  </SwiperSlide>
      </Swiper>
    </motion.div>



    <div className='contenedor-info'>

    <motion.div initial={{ x: -100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} className='conte-img-local'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3292.00435820174!2d-58.64089212336877!3d-34.401235146834566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca73f7a5ecced%3A0x712d97d7877561d0!2sBahala%20Beauty!5e0!3m2!1ses!2sar!4v1691607958784!5m2!1ses!2sar"  loading="lazy" ></iframe>
          </motion.div>
          <motion.div initial={{ x: 100 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} className='conte-txt-local'>
          <p className='texto-horarios'> Martes a Domingo: de 10:00 a 19:00 hs.</p>
          <p className='texto-horarios'>  Av. Agustín M. García 6385, B1648 Rincón de Milberg, Provincia de Buenos Aires</p>
          <p className='texto-horarios'>  011 6171-2268</p>

          {/* <a className='btn' href="https://goo.gl/maps/b8wLYU21idsAZQaK6" target='blank'>como llegar?</a> */}
          </motion.div>

        </div>






          

    



    </section>
    </>
  )
}

export default Local
