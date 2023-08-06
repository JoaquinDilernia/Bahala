import React from 'react'
import './Servicios.css'
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Stack,
  Text,
  Divider,
  Button,
  Center,
  Flex
} from "@chakra-ui/react";
import { Link } from 'react-router-dom'

import manos from './img/manos-pies.jpeg'
import facial from './img/facial.jpeg'
import depi from './img/depilacion.jpeg'
import pelu from './img/peluqueria.jpeg'
import pestañas from './img/pestañas-cejas.jpeg'
import masajes from './img/masajes.jpeg'

import { motion } from 'framer-motion'



const Servicios = () => {
  return (
    <>
    <section className='servicios'>
      <motion.h1 initial={{ scale: 0.1 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className='titulo-serv'>Servicios</motion.h1>
      <motion.div  initial={{ scale: 0.1 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}  className='contenedor-card'>
       <Link to='/depilacion'> 
      <Card className='card'> 
        <CardBody className='CardBody'>
        <Heading className='card-titulo'>MANOS Y PIES</Heading>
        <Divider />
        <Stack mt="1" spacing="3">
        <Image className='img-card' src={manos} width={300} />
          </Stack>
        </CardBody >
      </Card>
      </Link>
      <Card className='card'> 
        <CardBody className='CardBody'>
        <Heading className='card-titulo'>FACIALES Y CORPORALES</Heading>
        <Divider />
        <Stack mt="1" spacing="3">
        <Image className='img-card' src={facial} width={300} />
          </Stack>
        </CardBody >
      </Card>
      <Card className='card'> 
        <CardBody className='CardBody'>
        <Heading className='card-titulo'>MASAJES</Heading>
        <Divider />
        <Stack mt="1" spacing="3">
        <Image className='img-card' src={masajes} width={300} />
          </Stack>
        </CardBody >
      </Card>
      <Card className='card'> 
        <CardBody className='CardBody'>
        <Heading className='card-titulo'>PELUQUERIA</Heading>
        <Divider />
        <Stack mt="1" spacing="3">
        <Image className='img-card' src={pelu} width={300} />
          </Stack>
        </CardBody >
      </Card>
      <Card className='card'> 
        <CardBody className='CardBody'>
        <Heading className='card-titulo'>DEPILACION</Heading>
        <Divider />
        <Stack mt="1" spacing="3">
        <Image className='img-card' src={depi} width={300} />
          </Stack>
        </CardBody >
      </Card>
      <Card className='card'> 
        <CardBody className='CardBody'>
        <Heading className='card-titulo'>PESTAÑAS Y CEJAS</Heading>
        <Divider />
        <Stack mt="1" spacing="3">
        <Image className='img-card' src={pestañas} width={300} />
          </Stack>
        </CardBody >
      </Card>
      </motion.div>
    </section>
    </>
  )
}

export default Servicios
