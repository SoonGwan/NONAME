import React, { useState } from 'react';
import './Login.scss';
import Modal from 'components/common/Modal/Modal';
import { AiOutlineUser } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
const Login = ({ handleLoginModal }) => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <>
      <Modal handleClose={handleLoginModal} width={'480px'} height={'480px'}>
        {isLogin ? (
          <>
            <div className="Login">
              <div className="Login-Title">들어가고 싶어요?</div>
              <div className="Login-WrapID">
                <p>너의 아이디를 입력해줘</p>
                <input
                  className="Login-WrapID-ID"
                  type="text"
                  placeholder="여기야 여기"
                />
              </div>
              <div className="Login-WrapPW">
                <p>너의 비밀번호를 입력해줘</p>
                <input
                  className="Login-WrapPW-PW"
                  type="password"
                  placeholder="여기야 여기"
                />
              </div>
              <div className="Login-Register" onClick={() => setIsLogin(false)}>
                나 계정없는데..
              </div>
              <button className="Login-Button">로그인 해봐요.</button>
            </div>
          </>
        ) : (
          <>
            <div className="Register">
              <div className="Register-Title">진짜로 가입 할거죠?</div>
              <div
                style={{
                  display: 'flex',
                  marginTop: '15px',
                  justifyContent: 'space-between',
                }}
              >
                <div className="Register-WrapID">
                  <p>너의 이름을 입력해줘</p>
                  <input
                    className="Register-WrapID-ID"
                    type="text"
                    placeholder="내 이름은 순관이야"
                  />
                </div>
                <div className="Register-WrapID">
                  <p>너의 아이디를 입력해줘</p>
                  <input
                    className="Register-WrapID-ID"
                    type="text"
                    placeholder="여기야 여기"
                  />
                </div>
              </div>
              <div>
                <div className="Register-WrapEmail">
                  <p>너의 이메일을 입력해줘</p>
                  <input
                    className="Register-WrapEmail-Email"
                    type="email"
                    placeholder="나는 구글을 좋아해"
                  />
                </div>
              </div>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default Login;
