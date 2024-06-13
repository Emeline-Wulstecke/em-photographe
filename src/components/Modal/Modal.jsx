import React, { useState, useEffect, useCallback } from 'react';
import './modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    onClose();
  }, [onClose]);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  }, [closeModal]);

  const handleClickOutside = useCallback((event) => {
    if (event.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  }, [closeModal]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  useEffect(() => {
    if (modalOpen) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [modalOpen, handleClickOutside]);

  return (
    <>
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <button className="close-btn" onClick={closeModal}>X</button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
