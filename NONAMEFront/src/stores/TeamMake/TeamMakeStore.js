import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import TeamMakeRepository from './TeamMakeRepository';

@autobind
class TeamMakeStore {
  @action
  async handleTeamMake(request) {
    const response = await TeamMakeRepository.handleTeamMake(request);

    return response;
  }
}

export default TeamMakeStore;
