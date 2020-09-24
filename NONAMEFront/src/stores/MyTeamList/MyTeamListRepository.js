import { SERVER } from 'config/config.json';
import axios from 'axios';

class MyTeamListRepository {
  myTeamList = async () => {
    const name = localStorage.getItem('name');
    const { data } = await axios.post(
      `${SERVER}/team/getMyTeam?whoMade=${name}`
    );

    return data;
  };
}

export default new MyTeamListRepository();
