import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import TeamListRepository from './TeamListRepository';

@autobind
class TeamListStore {
  @observable teamList = [
    {
      idx: 3,
      teamName: '순관이',
      explain: '설명',
      mainImage: '1112261503-15772-415110-92615-4971196898151414.png',
      whoMade: '순관',
    },
  ];

  @action
  async handleTeamList() {
    const response = await TeamListRepository.handleTeamList();
    this.teamList = await response.data.team;
    console.log(this.teamList);
    return response;
  }
}

export default TeamListStore;
