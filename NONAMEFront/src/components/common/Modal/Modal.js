import React from 'react';
import { AiFillCloseSquare } from 'react-icons/ai';
import styled from 'styled-components';
import {
  ModalStyles,
  PostBackGround,
  ModalWrap,
  ModalCancel,
  ModalItem,
} from './Modal.style.jsx';

const Modal = ({ handleClose, width, height, children }) => {
  return (
    <>
      <ModalStyles>
        <PostBackGround onClick={handleClose}></PostBackGround>
        <ModalWrap style={{ width: width, height: height }}>
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
