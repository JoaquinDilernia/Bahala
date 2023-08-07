import React from 'react'
import './Modal.css'


const Modal = ({isOpen, closeModal, children }) => {

  const handleModalClick = (e) => {
    e.stopPropagation()
  }
  return (
    <div className={`modal ${isOpen && 'modal-open' }`} onClick={closeModal}>
      <div className='modal-full' onClick={handleModalClick}>
        {children}

     <div className='footer-modal'>
     <button className='btn-cerrar' onClick={closeModal}> close</button>
     </div>
    </div>
    </div>
  )
}

export default Modal
