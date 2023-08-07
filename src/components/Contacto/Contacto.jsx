import React from 'react'
import './Contacto.css'
import Modal from '../Modal/Modal'
import useModal from '../hooks/useModal'

import { Button} from "@chakra-ui/react";

import { motion } from 'framer-motion'


const Contacto = () => {
  const [isOpenModal6, openModal6, closeModal6] = useModal()

  return (
    <>
    <motion.h1 initial={{ scale: 0.1 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className='titulo'>Contacto</motion.h1>
    <motion.div initial={{ scale: 0.1 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }} className="contacto">
    <form >
      <div className="form-group">
        <label htmlFor="nombre">Nombre</label>
        <input type="text" name="nombre" id="nombre" placeholder="Nombre" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" placeholder="Email" />
      </div>
      <div className="form-group">
        <label htmlFor="mensaje">Mensaje</label>
        <textarea name="mensaje" id="mensaje" cols="30" rows="10" placeholder="Mensaje"></textarea>
      </div>
      <div className="form-group">
        <Button className='btn-enviar-form'  onClick={openModal6} > ENVIAR</Button>
        <Modal isOpen={isOpenModal6}>
          <h1 className='titulo-modal'>MENSAJE ENVIADO</h1>
          <p className='parrafo-modal'>Gracias por contactarnos, te responderemos a la brevedad</p>
        </Modal>
      </div>

      <div className='form-group'>
        <h3 className='titulo-wpp'>O CONTACTANOS POR WHATSAPP</h3>
        <a className='btn-wpp' href="https://api.whatsapp.com/send?phone=1161712268&text=Hola%20quiero%20hacer%20una%20consulta" target="_blank" rel="noreferrer">WHATSAPP</a>
      </div>



    </form>


  </motion.div>
    </>
  )
}

export default Contacto
