import axios from 'axios';
import { SERVER } from 'config/config.json';
class TeamListRepository {
  handleTeamList = async () => {
    const { data } = await axios.get(`${SERVER}/team/getTeam`);

    return data;
  };
}

export default new TeamListRepository();
