import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import TeamListRepository from './TeamListRepository';

@autobind
class TeamListStore {
  @observable teamList = [];

  @action
  async handleTeamList() {
    const response = await TeamListRepository.handleTeamList();
    this.teamList = await response.data.team;
    return response;
  }

  @action
  async handleTeamInfo(idx) {
    const response = await TeamListRepository.handleTeamInfo(idx);

    return response;
  }
}

export default TeamListStore;
