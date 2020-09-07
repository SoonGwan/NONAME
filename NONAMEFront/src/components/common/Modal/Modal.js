import React from 'react';
import './Modal.scss';
const Modal = ({ handleClose, width, height, children }) => {
  return (
    <>
      <div className="Modal">
        <div className="Modal-PostBackGround" onClick={handleClose}></div>
        <div className="Modal-Wrap" style={{ width: width, height: height }}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
