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
  @observable idx = '';
  @observable imgList = [];

  @action
  async handleTeamList() {
    const response = await TeamListRepository.handleTeamList();
    const IMGLIST = response.data.team.length;

    this.imgList = [];

    for (let i = 0; i < IMGLIST; i++) {
      const img = {
        teamName: response.data.team[i].teamName,
        img: response.data.team[i].mainImage,
      };
      this.imgList = [...this.imgList, img];
    }
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
  handleInfoContent = ({ teamName, mainImage, explain, whoMade, idx }) => {
    this.teamName = teamName;
    this.mainImage = mainImage;
    this.explain = explain;
    this.whoMade = whoMade;
    this.idx = idx;
  };
}

export default TeamListStore;
