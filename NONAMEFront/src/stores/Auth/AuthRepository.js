import axios from 'axios';
import { SERVER } from 'config/config.json';

class AuthRepository {
  handleLogin = async (request) => {
    const { data } = await axios.post(`${SERVER}/auth/login`, request);

    return data;
  };

  handleRegister = async (request) => {
    const { data } = await axios.post(`${SERVER}/auth/register`, request);

    return data;
  };
}

export default new AuthRepository();
