import React from 'react';
import { observer } from 'mobx-react';
import Login from 'components/Auth/Auth.Login';
import useStore from 'lib/useStores';
import { ToastContainer, toast } from 'react-toastify';

toast.configure();
const AuthContainer = observer(() => {
  const { store } = useStore();

  const { isLoginModal, handleLogin, handleLoginModal } = store.AuthStore;
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [rePw, setRePw] = useState('');
  const [email, setEmail] = useState('');
  const requestHanleLogin = useCallback(async () => {
    const data = {
      id,
      pw,
      name,
      email,
    };
    try {
      const response = await handleLogin(data);
      console.log(response);
    } catch (error) {
      return error;
    }
  });

  return (
    <>
      {isLoginModal ? (
        <Login
          requestHanleLogin={requestHanleLogin}
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
        />
      ) : null}
    </>
  );
});

export default AuthContainer;
