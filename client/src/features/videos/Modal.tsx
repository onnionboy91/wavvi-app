import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal1">
        <button className="modal-close" onClick={onClose}>
          CLOSE
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('root') as HTMLElement,
  );
};

export default Modal;
