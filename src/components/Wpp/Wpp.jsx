import React from 'react'
import { ChatIcon } from '@chakra-ui/icons'
import './Wpp.css'
import { motion } from 'framer-motion'


const Wpp = () => {
  return (
    <>
      <motion.a  initial={{ scale: 0.1 }} animate={{ scale: 1 }} transition={{ duration: 0.2 }} className='btn-wpp' target='blank' href="https://api.whatsapp.com/send?phone=1161712268"> <ChatIcon className='ChatIcon'/> </motion.a>
    </>
  )
}

export default Wpp
