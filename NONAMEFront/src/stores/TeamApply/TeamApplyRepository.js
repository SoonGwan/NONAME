import { SERVER } from 'config/config.json';
import axios from 'axios';

class TeamApplyRepository {
  applyTeam = async (request) => {
    const { data } = await axios.post(`${SERVER}/applyTeam/applyTeam`, request);

    return data;
  };
}

export default new TeamApplyRepository();
