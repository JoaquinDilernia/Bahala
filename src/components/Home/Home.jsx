import React from 'react'
import './Home.css'
import Hero from '../Hero/Hero'
import { Link } from 'react-router-dom'
import foto1 from './promo1.jpeg'
import servicios from './servicios.jpeg'
import local from './local.jpeg'
import contacto from './contacto.jpeg'
import promos from './promos.jpeg'
import promo2 from './promo2.jpeg'

import { motion } from 'framer-motion'

const Home = () => {
  return (
    <>
      <Hero />
      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className='home'>
        <div className='box-contenedor'>
          <Link to='/servicios'><motion.div initial={{ scale: 0.1 }} whileHover={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }} className='box'><img src={servicios} alt="" /></motion.div></Link>
          <Link to='/servicios'><motion.div initial={{ scale: 0.1 }} whileHover={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }} className='box'><img src={promos} alt="" /></motion.div></Link>
          <Link to='/local'><motion.div initial={{ scale: 0.1 }} whileHover={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }} className='box'><img src={local} alt="" /> </motion.div></Link>
          <Link to='/contacto'><motion.div initial={{ scale: 0.1 }} whileHover={{ scale: 1.1 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }} className='box'><img src={contacto} alt="" /></motion.div></Link>
        </div>
      </motion.section>

      <section className='home-2'>
        <div className='contenedor-1'>
          <motion.div initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} className='conte-txt'>
            <h1>DERMAPEN + LIMPIEZA FACIL PROFUNDA SEGUN TU PIEL</h1>
            <ul>
              <li>Elimina las arrugas, marcas, estrías o cicatrices de diversas zonas del cuerpo.</li>
              <li>Mejora el aspecto de cicatrices y estrías.</li>
              <li>Fomenta la creación de colágeno y elastina de la piel.</li>
              <li>Mejora las líneas finas y arrugas.</li>
              <li>Permite la oxigenación de la piel.</li>
              <li>Se remueven todas las células muertas de la piel y se eliminan las impurezas acumuladas de manera profunda.</li>
              <li>La piel se vuelve más luminosa y luce más suave y tersa.</li>
              <li>Ayuda a disminuir la apariencia de cansancio.</li>
            </ul>
          </motion.div>
          <motion.div initial={{ x: 50 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} className='conte-img'>
            <img src={foto1} alt="foto1" />
          </motion.div>
        </div>

        <div className='contenedor-1'>
          <motion.div initial={{ x: -50 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} className='conte-img'>
            <img src={promo2} alt="foto1" />
          </motion.div>
          <motion.div initial={{ x: 50 }} whileInView={{ x: 0 }} transition={{ duration: 1 }} className='conte-txt'>
            <h1>¡DESCUBRE NUESTRO NUEVO SERVICIO DE PELUQUERIA  </h1>
            <p>
              En Bahala, siempre nos esforzamos por brindarte lo mejor en cuidado y belleza, y estamos encantados de presentarte nuestra última incorporación: ¡nuestro completo servicio de Peluquería! Sabemos lo importante que es tener un cabello hermoso y bien cuidado, y nuestro equipo de expertos peluqueros está listo para ofrecerte una experiencia única y transformadora.
            </p>
          </motion.div>
        </div>
      </section>

    </>

  )
}

export default Home
