import React, { useEffect } from 'react';
import { RiLoginBoxFill, RiMenu2Fill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';
import AuthContainer from 'container/AuthContainer/AuthContainer';
import Login from 'components/Auth/Auth.Login';
import { observer } from 'mobx-react';
import useStore from 'lib/useStores';
import {
  HeaderStyles,
  HeaderMenu,
  HeaderTitle,
  HeaderTitleItem,
  HeaderSearch,
} from './Header.style';
const Header = observer(() => {
  const { store } = useStore();
  const {
    isLoginModal,
    handleLogin,
    handleLoginModal,
    userName,
    handleUserInfo,
    handleLogout,
  } = store.AuthStore;
  useEffect(() => {
    handleUserInfo();
  });
  return (
    <>
      <HeaderStyles>
        <HeaderMenu>
          <RiLoginBoxFill
            onClick={
              !userName ? () => handleLoginModal() : () => handleLogout()
            }
          />
        </HeaderMenu>
        <HeaderTitle>
          <HeaderTitleItem>무제</HeaderTitleItem> 프로젝트
        </HeaderTitle>
        <HeaderSearch>{!userName ? '' : userName + ' 님'}</HeaderSearch>
      </HeaderStyles>
      <AuthContainer />
    </>
  );
});

export default Header;
