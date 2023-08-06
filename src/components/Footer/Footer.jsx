import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-text'>
        <p>Bahala Beauty © Todos los derechos reservados</p>
      </div>

      <div className='social-media'>
        <a href="https://api.whatsapp.com/send?phone=1161712268" target="_blank"><i className="bx bxl-whatsapp"></i></a>
        <a href="https://instagram.com/bahalabeauty?igshid=MzRlODBiNWFlZA==" target="_blank"><i className="bx bxl-instagram"></i></a>

      </div>

    </footer>
  )
}

export default Footer
