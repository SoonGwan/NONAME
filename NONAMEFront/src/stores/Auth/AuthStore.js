import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import AuthRepository from './AuthRepository';
import SecureLS from 'secure-ls';

@autobind
class AuthStore {
  @observable isLoginModal = false;
  @observable userName = '';
  @action
  handleLogin = async (request) => {
    const response = await AuthRepository.handleLogin(request);
    return response;
  };

  handleRegister = async (request) => {
    const response = await AuthRepository.handleRegister(request);

    return response;
  };

  @action
  handleUserInfo = async () => {
    const response = await AuthRepository.userInfo();
    this.userName = response.data.list.id;
    localStorage.setItem('name', response.data.list.id);
    return response;
  };

  @action
  handleLoginModal = () => {
    this.isLoginModal = !this.isLoginModal;
  };

  @action
  handleLogout = () => {
    sessionStorage.removeItem('token');
    localStorage.removeItem('name');
    location.reload();
  };
}

export default AuthStore;
