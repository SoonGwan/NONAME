import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import MyInfoRepository from './MyInfoRepository';
import SecureLS from 'secure-ls';

@autobind
class MyInfoStore {
  @action
  async handleMyInfo() {
    const response = await MyInfoRepository.myInfo();
    const ls = new SecureLS({ encodingType: 'aes' });
    ls.set('user-info', response.data.id);

    return response;
  }
}

export default MyInfoStore;
