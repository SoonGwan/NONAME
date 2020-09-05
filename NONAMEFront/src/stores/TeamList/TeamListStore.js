import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import TeamListRepository from './TeamListRepository';

@autobind
class TeamListStore {
  @observable teamList = [];

  @action
  async handleTeamList() {
    const response = await TeamListRepository.handleTeamList();
    console.group(response);
    this.teamList = await response.data.team;
    console.log(this.teamList);
    return response;
  }
}

export default TeamListStore;
