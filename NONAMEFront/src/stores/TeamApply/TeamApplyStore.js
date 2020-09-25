import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import TeamApplyRepository from './TeamApplyRepository';

@autobind
class TeamApplyStore {
  @action
  handleApplyTeam = async (request) => {
    const response = await TeamApplyRepository.applyTeam(request);

    return response;
  };
}

export default TeamApplyStore;
