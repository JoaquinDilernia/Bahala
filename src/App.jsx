import { useState } from 'react'
import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Routes, Route } from 'react-router-dom'
import Servicios from './components/Servicios/Servicios'
import Contacto from './components/Contacto/Contacto'
import Home from './components/Home/Home'
import Error404 from './components/Error404/Error404'
import NavBar from './components/NavBar/NavBar'
import Footer from './components/Footer/Footer'
import Local from './components/Local/Local'
import Promos from './components/Promos/Promos'
import Wpp from './components/Wpp/Wpp'





function App() {

  return (
    <>

      <ChakraProvider>
        <NavBar />
        <Wpp />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/promos' element={<Promos />} />
          <Route path='/local' element={<Local />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
        <Footer />
      </ChakraProvider>

    </>
  )
}

export default App
