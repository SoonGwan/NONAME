import AuthStore from './Auth';
import TeamListStore from './TeamList/TeamListStore';
import TeamMakeStore from './TeamMake/TeamMakeStore';
import uploadStore from './upload/uploadStore';

const stores = {
  AuthStore: new AuthStore(),
  TeamListStore: new TeamListStore(),
  TeamMakeStore: new TeamMakeStore(),
  uploadStore: new uploadStore(),
};

export default stores;
