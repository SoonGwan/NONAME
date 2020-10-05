import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import MyTeamListRepository from './MyTeamListRepository';
import TeamListStore from '../TeamList/TeamListRepository';
import SecureLS from 'secure-ls';

@autobind
class MyTeamListStore {
  @observable myTeam = [];
  @observable myTeamApply_user = [];
  @observable myTeamInfoModal = false;
  @observable teamName = '';
  @observable whoMade = '';
  @observable mainImage = '';
  @observable explain = '';
  @observable idx = '';

  @action
  async handleMyTeamList(name) {
    const response = await MyTeamListRepository.myTeamList(name);
    this.myTeam = response.data.myTeam;

    return response;
  }

  @action
  handleTeamApplyList = async (idx) => {
    const response = await MyTeamListRepository.teamApplyList(idx);
    this.myTeamApply_user = response.data.applyTeam;

    return response;
  };

  @action
  handleMyTeamInfo = async (idx) => {
    const response = await TeamListStore.handleTeamInfo(idx);

    return response;
  };
  @action
  handleMyTeamInfoModal = () => {
    this.myTeamInfoModal = !this.myTeamInfoModal;
  };
  @action
  handleInfoContent = ({ teamName, mainImage, explain, whoMade, idx }) => {
    this.teamName = teamName;
    this.mainImage = mainImage;
    this.explain = explain;
    this.whoMade = whoMade;
    this.idx = idx;
    console.log(teamName, mainImage, explain, whoMade, idx);
  };
}

export default MyTeamListStore;
