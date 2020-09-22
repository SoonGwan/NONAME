import React, { useState, useCallback } from 'react';
import { observer } from 'mobx-react';
import Login from 'components/Auth/Auth.Login';
import useStore from 'lib/useStores';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuthContainer = observer(() => {
  toast.configure();
  const { store } = useStore();

  const {
    isLoginModal,
    handleLogin,
    handleLoginModal,
    handleRegister,
  } = store.AuthStore;
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [name, setName] = useState('');
  const [rePw, setRePw] = useState('');
  const [email, setEmail] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const requestHandleLogin = useCallback(async () => {
    const data = {
      id,
      pw,
    };
    if (id === '' || pw === '') {
      toast.error('무언가를 놓고 왔어요!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    try {
      const response = await handleLogin(data);
      if (response.status === 200) {
        //모달 환영
        toast.success('로그인 성공!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        sessionStorage.setItem('token', response.data['x-access-token']);
        handleLoginModal();
      }
    } catch (error) {
      if (error) {
        toast.error('무언가 착각 한것 같아요.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      return error;
    }
  });

  const requestHandleRegister = useCallback(async () => {
    const data = {
      id,
      pw,
      name,
      email,
    };
    if (pw !== rePw) {
      toast.error('비밀번호가 오타인것 같은데요....', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (!email.includes('@')) {
      toast.error('이메일이 정상적이지 않은 것 같아요...', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    try {
      const response = await handleRegister(data);
      const { status } = response;
      if (status === 200) {
        toast.success('회원가입 성공!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsLogin(true);
        setId('');
        setPw('');
        setName('');
        setEmail('');
      }
    } catch (error) {
      const { status } = error.response;
      if (status === 409) {
        toast.error('어머 이미 사용중인 아이디에요!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.error('어머 서버가 아픈가 봐요!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  });

  return (
    <>
      {isLoginModal ? (
        <Login
          requestHandleLogin={requestHandleLogin}
          id={id}
          setId={setId}
          pw={pw}
          setPw={setPw}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          rePw={rePw}
          setRePw={setRePw}
          handleLoginModal={handleLoginModal}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          requestHandleRegister={requestHandleRegister}
          isLoginModal={isLoginModal}
        />
      ) : null}
    </>
  );
});

export default AuthContainer;
