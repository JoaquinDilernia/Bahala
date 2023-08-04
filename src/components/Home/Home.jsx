import React from 'react'
import './Home.css'
import Hero from '../Hero/Hero'
import { Link } from 'react-router-dom'
import foto1 from './promo1.jpeg'
import { motion } from 'framer-motion'

const Home = () => {
  return (
    <>
      <Hero />
      <motion.section initial={{opacity:0}} animate={{opacity:1}}  transition={{ duration: 3 }} className='home'>
        <div className='box-contenedor'>
          <Link to='/servicios'><motion.div initial={{scale:0.1}} whileHover={{scale:1.1}} animate={{  scale:1 }} transition={{ duration: 0.2}}className='box'><h3>Servicios</h3></motion.div></Link>
          <Link to='/promos'><motion.div initial={{scale:0.1}} whileHover={{scale:1.1}} animate={{  scale:1 }} transition={{ duration: 0.2 }} className='box'><h3>Promos</h3></motion.div></Link>
          <Link to='/local'><motion.div initial={{scale:0.1}} whileHover={{scale:1.1}} animate={{  scale:1 }} transition={{ duration: 0.2 }} className='box'><h3>Local</h3></motion.div></Link>
          <Link to='/contacto'><motion.div initial={{scale:0.1}} whileHover={{scale:1.1}} animate={{  scale:1 }} transition={{ duration: 0.2 }} className='box'><h3>Contacto</h3></motion.div></Link>
        </div>
      </motion.section>

      <section className='home-2'>
        <div className='contenedor-1'>
          <motion.div initial={{x: -300}} whileInView={{  x:0 }} transition={{ duration: 1 }} className='conte-txt'>
            <h1>titulo</h1>
            <p className='texto-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, voluptatem blanditiis
              assumenda incidunt ipsam harum iste perferendis provident labore, nemo veritatis enim veniam nisi laudantium! Vel quis maiores sed earum?</p>
          </motion.div>
          <motion.div initial={{x: 300}} whileInView={{  x:0 }} transition={{ duration: 1 }} className='conte-img'>
            <img src={foto1} alt="foto1" />
          </motion.div>
        </div>
        <div className='contenedor-1'>

          <motion.div initial={{x: -300}} whileInView={{  x:0 }} transition={{ duration: 1 }}  className='conte-img'>
            <img src={foto1} alt="foto1" />
          </motion.div>
          <div className='conte-txt'>
            <h1>titulo</h1>
            <motion.p initial={{x: 300}} whileInView={{  x:0 }} transition={{ duration: 1 }} className='texto-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, voluptatem blanditiis
              assumenda incidunt ipsam harum iste perferendis provident labore, nemo veritatis enim veniam nisi laudantium! Vel quis maiores sed earum?</motion.p>
          </div>
        </div>


      </section>

    </>

  )
}

export default Home
