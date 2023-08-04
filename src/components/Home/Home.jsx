import React from 'react'
import './Home.css'
import Hero from '../Hero/Hero'
import { Link } from 'react-router-dom'
import foto1 from './promo1.jpeg'

const Home = () => {
  return (
    <>
      <Hero />
      <section className='home'>
        <div className='box-contenedor'>
          <Link to='/servicios'><div className='box'><h3>Servicios</h3></div></Link>
          <Link to='/local'><div className='box'><h3>Local</h3></div></Link>
          <Link to='/contacto'><div className='box'><h3>contacto</h3></div></Link>
          <Link to='/promos'><div className='box'><h3>Promos</h3></div></Link>
        </div>
      </section>

      <section className='home-2'>
        <div className='contenedor-1'>
          <div className='conte-txt'>
            <h1>titulo</h1>
            <p className='texto-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, voluptatem blanditiis
              assumenda incidunt ipsam harum iste perferendis provident labore, nemo veritatis enim veniam nisi laudantium! Vel quis maiores sed earum?</p>
          </div>
          <div className='conte-img'>
            <img src={foto1} alt="foto1" />
          </div>
        </div>
        <div className='contenedor-1'>

          <div className='conte-img'>
            <img src={foto1} alt="foto1" />
          </div>
          <div className='conte-txt'>
            <h1>titulo</h1>
            <p className='texto-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel, voluptatem blanditiis
              assumenda incidunt ipsam harum iste perferendis provident labore, nemo veritatis enim veniam nisi laudantium! Vel quis maiores sed earum?</p>
          </div>
        </div>


      </section>

    </>

  )
}

export default Home
