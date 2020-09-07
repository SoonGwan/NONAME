import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import TeamListRepository from './TeamListRepository';

@autobind
class TeamListStore {
  @observable teamList = [];
  @observable isInfoModal = false;
  @observable teamName = '';
  @observable whoMade = '';
  @observable mainImage = '';
  @observable explain = '';

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

  @action
  handleInfoModal = () => {
    this.isInfoModal = !this.isInfoModal;
  };

  @action
  handleInfoContent = ({ teamName, mainImage, explain, whoMade }) => {
    this.teamName = teamName;
    this.mainImage = mainImage;
    this.explain = explain;
    this.whoMade = whoMade;
    console.log(teamName, mainImage, explain, whoMade);
  };
}

export default TeamListStore;
