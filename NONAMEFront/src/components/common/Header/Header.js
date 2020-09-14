import React from 'react';
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
  const { isLoginModal, handleLogin, handleLoginModal } = store.AuthStore;
  return (
    <>
      <HeaderStyles>
        <HeaderMenu>
          <RiLoginBoxFill onClick={() => handleLoginModal()} />
        </HeaderMenu>
        <HeaderTitle>
          <HeaderTitleItem>무제</HeaderTitleItem> 프로젝트
        </HeaderTitle>
        <HeaderSearch>
          <CgProfile />
        </HeaderSearch>
      </HeaderStyles>
      <AuthContainer />
    </>
  );
});

export default Header;
