import React from 'react';
import './Header.scss';
import { RiLoginBoxFill, RiMenu2Fill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';
import AuthContainer from 'container/AuthContainer/AuthContainer';
import Login from 'components/Auth/Auth.Login';
import { observer } from 'mobx-react';
import useStore from 'lib/useStores';

const Header = observer(() => {
  const { store } = useStore();
  const { isLoginModal, handleLogin, handleLoginModal } = store.AuthStore;
  return (
    <>
      <div className="Header">
        <div className="Header-Menu">
          <RiLoginBoxFill onClick={() => handleLoginModal()} />
        </div>
        <div className="Header-Title">
          <span>무제</span> 프로젝트
        </div>
        <div className="Header-Search">
          <CgProfile />
        </div>
      </div>
      <AuthContainer />
    </>
  );
});

export default Header;
