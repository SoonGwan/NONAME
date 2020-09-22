import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import AuthRepository from './AuthRepository';
import SecureLS from 'secure-ls';

@autobind
class AuthStore {
  @observable isLoginModal = false;
  @observable userName = '';
  @action
  async handleLogin(request) {
    const response = await AuthRepository.handleLogin(request);
    return response;
  }

  async handleRegister(request) {
    const response = await AuthRepository.handleRegister(request);

    return response;
  }

  @action
  async handleUserInfo() {
    const response = await AuthRepository.userInfo();
    this.userName = response.data.list.id;

    return response;
  }

  @action
  handleLoginModal = () => {
    this.isLoginModal = !this.isLoginModal;
  };

  @action
  handleLogout = () => {
    sessionStorage.removeItem('token');
    location.reload();
  };
}

export default AuthStore;
