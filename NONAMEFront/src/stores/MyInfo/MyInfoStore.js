import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import MyInfoRepository from './MyInfoRepository';
import SecureLS from 'secure-ls';

@autobind
class MyInfoStore {
  @action
  async handleMyInfo() {
    console.log('asdasd');
    const response = await MyInfoRepository.myInfo();
    console.log(response);

    return response;
  }
}

export default MyInfoStore;
