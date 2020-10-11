import React, { useEffect } from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';
import {
  ModalStyles,
  PostBackGround,
  ModalWrap,
  ModalCancel,
  ModalItem,
} from './Modal.style.jsx';

const Modal = ({ handleClose, width, height, children, isPress }) => {
  const SCREEN_WIDTH = screen.width;
  if (SCREEN_WIDTH < 480) {
  }
  useEffect(() => {
    isPress === true
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'unset');
    return () => (document.body.style.overflow = 'unset');
  });
  const Modal = {
    width: width,
    height: height,
  };
  const mobileModal = {
    width: '100%',
    height: '90%',
  };
  return (
    <>
      <ModalStyles>
        <PostBackGround onClick={handleClose}></PostBackGround>
        <ModalWrap style={SCREEN_WIDTH < 480 ? mobileModal : Modal}>
          <ModalCancel>
            <AiFillCloseSquare
              onClick={() => handleClose()}
              style={{ cursor: 'pointer', width: '20px', height: '20px' }}
            />
            <hr />
          </ModalCancel>
          <ModalItem>{children}</ModalItem>
        </ModalWrap>
      </ModalStyles>
    </>
  );
};

export default Modal;
