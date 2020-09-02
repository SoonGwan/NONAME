import { action, autobind, observable } from 'mobx-react';
import AuthRepository from './AuthRepository';

class AuthStore {
  async handleLogin(request) {
    const response = await AuthRepository.handleLogin(request);

    return response;
  }

  async handleRegister(request) {
    const response = await AuthRepository.handleRegister(request);

    return response;
  }
}

export default AuthStore;
