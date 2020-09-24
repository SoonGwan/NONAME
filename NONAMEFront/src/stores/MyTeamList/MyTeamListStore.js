import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import MyTeamListRepository from './MyTeamListRepository';
import SecureLS from 'secure-ls';

@autobind
class MyTeamListStore {
  @action
  handleMyTeamList = async () => {
    const response = await MyTeamListRepository.myYeamList();

    return response;
  };
}

export default MyTeamListStore;
