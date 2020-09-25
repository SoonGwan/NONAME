import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import MyTeamListRepository from './MyTeamListRepository';
import SecureLS from 'secure-ls';

@autobind
class MyTeamListStore {
  @observable myTeam = [];
  @observable myTeamApply_user = [];
  @observable myTeamInfoModal = false;
  @action
  async handleMyTeamList(name) {
    const response = await MyTeamListRepository.myTeamList(name);
    this.myTeam = response.data.myTeam;

    return response;
  }

  @action
  handleTeamApplyList = async (idx) => {
    const response = await MyTeamListRepository.teamApplyList(idx);
    console.log(response);
    this.myTeamApply_user = response.data.applyTeam;

    return response;
  };

  @action
  handleMyTeamInfoModal = () => {
    this.myTeamInfoModal = !this.myTeamInfoModal;
  };
}

export default MyTeamListStore;
