import axios from 'axios';
import { SERVER } from 'config/config.json';
class TeamListRepository {
  handleTeamList = async () => {
    const { data } = await axios.get(`${SERVER}/team/getTeam`);

    return data;
  };

  handleTeamInfo = async (idx) => {
    const { data } = await axios.get(`${SERVER}/team/infoTeam?idx=${idx}`);

    return data;
  };
}

export default new TeamListRepository();
