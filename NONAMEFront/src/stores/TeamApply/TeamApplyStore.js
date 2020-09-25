import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import TeamApplyRepository from './TeamApplyRepository';

@autobind
class TeamApplyStore {
  @observable applyModal = false;

  @action
  handleApplyTeam = async (request) => {
    const response = await TeamApplyRepository.applyTeam(request);

    return response;
  };

  @action
  handleApplyModal = () => {
    this.applyModal = !this.applyModal;
  };
}

export default TeamApplyStore;
