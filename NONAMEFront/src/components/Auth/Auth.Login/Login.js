import React from 'react';
import './Login.scss';
import Modal from 'components/common/Modal/Modal';
const Login = ({ handleLoginModal }) => {
  return (
    <>
      <Modal
        handleClose={handleLoginModal}
        width={'480px'}
        height={'480px'}
      ></Modal>
    </>
  );
};

export default Login;
