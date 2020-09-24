import { SERVER } from 'config/config.json';
import axios from 'axios';

class MyTeamListRepository {
  myTeamList = async (name) => {
    const { data } = await axios.get(
      `${SERVER}/team/getMyTeam?whoMade=${name}`
    );
    return data;
  };

  teamApplyList = async (idx) => {
    const { data } = await axios.get(
      `${SERVER}/applyTeam/teamApplyList?idx=${idx}`
    );

    return data;
  };
}

export default new MyTeamListRepository();
