import React, { useRef } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import './Modal.css';

const Modal = ({ onClose = () => {}, children }) => {
  const ref = useRef();
  useOnClickOutside(ref, () => onClose());
  return (
    <div className='modal-container'>
      <div className='modal' ref={ref}>
        <i className='fas fa-times modal-close' onClick={() => onClose()}></i>
        {children}
      </div>
    </div>
  );
};

export default Modal;
