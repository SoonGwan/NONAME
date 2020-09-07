import React from 'react';
import { observer } from 'mobx-react';
import Login from 'components/Auth/Auth.Login';
import useStore from 'lib/useStores';

const AuthContainer = observer(() => {
  const { store } = useStore();

  const { isLoginModal, handleLogin, handleLoginModal } = store.AuthStore;

  return (
    <>
      {isLoginModal ? (
        <Login handleLogin={handleLogin} handleLoginModal={handleLoginModal} />
      ) : null}
    </>
  );
});

export default AuthContainer;
