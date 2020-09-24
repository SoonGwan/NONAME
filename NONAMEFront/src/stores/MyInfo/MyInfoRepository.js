import axios from 'axios';
import { SERVER } from 'config/config.json';

class MyInfoRepository {
  myInfo = async () => {
    const { data } = await axios.get(`${SERVER}/user/myInfo`);
    return data;
  };
}

export default new MyInfoRepository();
