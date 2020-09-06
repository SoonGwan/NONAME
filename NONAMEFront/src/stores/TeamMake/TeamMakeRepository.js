import axios from 'axios';
import { SERVER } from 'config/config.json';

class TeamMakeRepository {
  handleTeamMake = async (request) => {
    const { data } = await axios.post(`${SERVER}/team/makeTeam`, request);

    return data;
  };
}

export default new TeamMakeRepository();
