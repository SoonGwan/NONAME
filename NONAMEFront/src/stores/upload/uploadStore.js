import { action, observable } from 'mobx';
import { autobind } from 'core-decorators';
import uploadRepository from './uploadRepository';

@autobind
class uploadStore {
  @observable imgURL = '';

  @action
  async handleUpLoad(request) {
    const response = await uploadRepository.handleUpLoad(request);
    this.imgURL = await response.data.files[0];

    return response;
  }
}

export default uploadStore;
