import React from 'react'
import './Home.css'
import Servicios from '../Servicios/Servicios'
import Contacto from '../Contacto/Contacto'
import Hero from '../Hero/Hero'
import Local from '../Local/Local'

const Home = () => {
  return (
    <>
    <Hero />
    <Servicios />
    <Local />
    <Contacto />
    </>

  )
}

export default Home
