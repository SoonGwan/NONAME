import axios from 'axios';
import { SERVER } from 'config/config.json';

class uploadRepository {
  handleUpLoad = async (request) => {
    const formData = new FormData();
    formData.append('files', request[0]);
    console.log(request);
    const { data } = await axios.post(`${SERVER}/upload`, formData);

    return data;
  };
}

export default new uploadRepository();
