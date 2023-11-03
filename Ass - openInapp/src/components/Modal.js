// Modal.js
import React from 'react';
import './Modal.css';

function Modal({ isOpen, toggleModal, children }) {
  if (!isOpen) {
    return null; // Don't render the modal if isOpen is false
  }

  const closeModal = (e) => {
    // Close the modal when clicking on the overlay
    if (e.target.classList.contains('modal-overlay')) {
      toggleModal();
    }
  };

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content">
        {children}
      </div>
    </div>
  );
}

export default Modal;
