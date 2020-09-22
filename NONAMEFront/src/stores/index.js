import AuthStore from './Auth';
import TeamListStore from './TeamList/TeamListStore';
import TeamMakeStore from './TeamMake/TeamMakeStore';
import uploadStore from './upload/uploadStore';
import info from './MyInfo/MyInfoStore';

const stores = {
  AuthStore: new AuthStore(),
  TeamListStore: new TeamListStore(),
  TeamMakeStore: new TeamMakeStore(),
  uploadStore: new uploadStore(),
  info: new info(),
};

export default stores;
