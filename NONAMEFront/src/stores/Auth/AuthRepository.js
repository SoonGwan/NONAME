import axios from 'axios';
import { SERVER } from 'config/config.json';
import Token from 'lib/Token';
class AuthRepository {
  handleLogin = async (request) => {
    const { data } = await axios.post(`${SERVER}/auth/login`, request);

    return data;
  };

  handleRegister = async (request) => {
    const { data } = await axios.post(`${SERVER}/auth/register`, request);

    return data;
  };

  userInfo = async () => {
    const token =
      Token() === 'session' ? sessionStorage.getItem('token') : null;

    const { data } = await axios.get(`${SERVER}/user/myInfo`, {
      headers: {
        'x-access-token': token,
      },
    });
    return data;
  };
}

export default new AuthRepository();
