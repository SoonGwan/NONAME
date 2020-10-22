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
  @observable modifyModal = false;
  @observable teamNames = '';
  @observable whoMades = '';
  @observable mainImages = '';
  @observable explains = '';
  @observable idxs = '';

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
  handleModifyMyTeam = async (request, idx) => {
    const response = await MyTeamListRepository.modifyMyTeam(request, idx);

    return response;
  };

  @action
  handleDeleteMyTeam = async (idx) => {
    const response = await MyTeamListRepository.deleteMyTeam(idx);

    return response;
  };

  @action
  handleMyTeamInfoModal = () => {
    this.myTeamInfoModal = !this.myTeamInfoModal;
  };
  @action
  handleInfoContent = ({ teamName, mainImage, explain, whoMade, idx }) => {
    this.teamNames = teamName;
    this.mainImages = mainImage;
    this.explains = explain;
    this.whoMades = whoMade;
    this.idxs = idx;
  };

  @action
  handleModifyTeamModal = () => {
    this.modifyModal = !this.modifyModal;
  };
}

export default MyTeamListStore;
