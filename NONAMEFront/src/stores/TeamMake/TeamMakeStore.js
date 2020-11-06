import { action } from 'mobx';
import { autobind } from 'core-decorators';
import TeamMakeRepository from './TeamMakeRepository';

@autobind
class TeamMakeStore {
  @action
  handleTeamMake = async (request) => {
    const response = await TeamMakeRepository.handleTeamMake(request);

    return response;
  };
}

export default TeamMakeStore;
