import React, { useState } from 'react'
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

import manos from './img/manos-pies.jpeg'
import facial from './img/facial.jpeg'
import depi from './img/depilacion.jpeg'
import pelu from './img/peluqueria.jpeg'
import pestañas from './img/pestañas-cejas.jpeg'
import masajes from './img/masajes.jpeg'
import Modal from '../Modal/Modal'
import useModal from '../hooks/useModal'

import { motion } from 'framer-motion'



const Servicios = () => {

  const [isOpenModal, openModal, closeModal] = useModal()
  const [isOpenModal1, openModal1, closeModal1] = useModal()
  const [isOpenModal2, openModal2, closeModal2] = useModal()
  const [isOpenModal3, openModal3, closeModal3] = useModal()
  const [isOpenModal4, openModal4, closeModal4] = useModal()
  const [isOpenModal5, openModal5, closeModal5] = useModal()


  return (
    <>
      <section className='servicios'>
        <motion.h1 initial={{ scale: 0.1 }} animate={{ scale: 1 }} transition={{ duration: 0.5 }} className='titulo-serv'>Servicios</motion.h1>
        <motion.div initial={{ scale: 0.1 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }} className='contenedor-card'>

          <Card className='card'>
            <CardBody className='CardBody'>
              <Heading className='card-titulo'>MANOS Y PIES</Heading>
              <Divider />
              <Stack mt="1" spacing="3">
                <Image className='img-card' src={manos} width={300} />
              </Stack>
            </CardBody >
            <CardFooter className='card-footer'>
              <Button className='btn-ver' onClick={openModal}>VER SERVICIOS</Button>

              <Modal isOpen={isOpenModal} closeModal={closeModal}>
                <h1 className='titulo-modal'>MANOS Y PIES</h1>
                <ul className="ul-modal" >
                  <li className="li-modal">Manicura</li>
                  <li>Pedicura</li>
                  <li>Uñas esculpidas</li>
                  <li>Uñas esmaltadas</li>
                  <li>Uñas semipermanentes</li>
                  <li>Uñas acrílicas</li>
                  <li>Uñas de gel</li>
                  <li>Uñas de porcelana</li>
                </ul>
              </Modal>
            </CardFooter>
          </Card>

          <Card className='card'>
            <CardBody className='CardBody'>
              <Heading className='card-titulo'>FACIALES Y CORPORALES</Heading>
              <Divider />
              <Stack mt="1" spacing="3">
                <Image className='img-card' src={facial} width={300} />
              </Stack>
            </CardBody >
            <CardFooter className='card-footer'>

              <Button className='btn-ver' onClick={openModal1}>VER SERVICIOS</Button>
              <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
                <h1 className='titulo-modal'>FACIALES Y CORPORALES</h1>
                <ul className="ul-modal" >
                  <li className="li-modal">Manicura</li>
                  <li>Pedicura</li>
                  <li>Uñas esculpidas</li>
                  <li>Uñas esmaltadas</li>
                  <li>Uñas semipermanentes</li>
                  <li>Uñas acrílicas</li>
                </ul>
              </Modal>
            </CardFooter>
          </Card>

          <Card className='card'>
            <CardBody className='CardBody'>
              <Heading className='card-titulo'>MASAJES</Heading>
              <Divider />
              <Stack mt="1" spacing="3">
                <Image className='img-card' src={masajes} width={300} />
              </Stack>
            </CardBody >
            <CardFooter className='card-footer'>

              <Button className='btn-ver' onClick={openModal2}>VER SERVICIOS</Button>
              <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
                <h1 className='titulo-modal'>MASAJES</h1>
                <ul className="ul-modal" >
                  <li className="li-modal">Manicura</li>
                  <li>Pedicura</li>
                  <li>Uñas esculpidas</li>
                  <li>Uñas esmaltadas</li>
                  <li>Uñas semipermanentes</li>
                  <li>Uñas acrílicas</li>
                  <li>Uñas de gel</li>
                </ul>
              </Modal>
            </CardFooter>
          </Card>

          <Card className='card'>
            <CardBody className='CardBody'>
              <Heading className='card-titulo'>PELUQUERIA</Heading>
              <Divider />
              <Stack mt="1" spacing="3">
                <Image className='img-card' src={pelu} width={300} />
              </Stack>
            </CardBody >
            <CardFooter className='card-footer'>
              <Button className='btn-ver' onClick={openModal3}>VER SERVICIOS</Button>

              <Modal isOpen={isOpenModal3} closeModal={closeModal3}>
                <h1 className='titulo-modal'>PELUQUERIA</h1>
                <ul className="ul-modal" >
                  <li className="li-modal">Manicura</li>
                  <li>Pedicura</li>
                  <li>Uñas esculpidas</li>
                  <li>Uñas esmaltadas</li>
                  <li>Uñas semipermanentes</li>
                  <li>Uñas acrílicas</li>
                  <li>Uñas de gel</li>
                  <li>Uñas de porcelana</li>
                </ul>
              </Modal>
            </CardFooter>
          </Card>

          <Card className='card'>
            <CardBody className='CardBody'>
              <Heading className='card-titulo'>DEPILACION</Heading>
              <Divider />
              <Stack mt="1" spacing="3">
                <Image className='img-card' src={depi} width={300} />
              </Stack>
            </CardBody >
            <CardFooter className='card-footer'>
              <Button className='btn-ver' onClick={openModal4}>VER SERVICIOS</Button>

              <Modal isOpen={isOpenModal4} closeModal={closeModal4}>
                <h1 className='titulo-modal'>DEPILACION</h1>
                <ul className="ul-modal" >
                  <li >Manicura</li>
                  <li>Pedicura</li>
                  <li>Uñas esculpidas</li>
                  <li>Uñas esmaltadas</li>
                  <li>Uñas semipermanentes</li>
                  <li>Uñas acrílicas</li>
                  <li>Uñas de gel</li>
                </ul>
              </Modal>
            </CardFooter>
          </Card>

          <Card className='card'>
            <CardBody className='CardBody'>
              <Heading className='card-titulo'>PESTAÑAS Y CEJAS</Heading>
              <Divider />
              <Stack mt="1" spacing="3">
                <Image className='img-card' src={pestañas} width={300} />
              </Stack>
            </CardBody >
            <CardFooter className='card-footer'>
              <Button className='btn-ver' onClick={openModal5}>VER SERVICIOS</Button>

              <Modal isOpen={isOpenModal5} closeModal={closeModal5}>
                <h1 className='titulo-modal'>PESTAÑAS Y CEJAS</h1>
                <ul className="ul-modal" >
                  <li>Manicura</li>
                  <li>Pedicura</li>
                  <li>Uñas esculpidas</li>
                  <li>Uñas esmaltadas</li>
                  <li>Uñas semipermanentes</li>
                  <li>Uñas acrílicas</li>
                  <li>Uñas de gel</li>
                  <li>Uñas de porcelana</li>
                </ul>
              </Modal>
            </CardFooter>
          </Card>
        </motion.div>
      </section>
    </>
  )
}

export default Servicios
