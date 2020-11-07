import AuthStore from './Auth';
import TeamListStore from './TeamList';
import TeamMakeStore from './TeamMake';
import uploadStore from './upload';
import info from './MyInfo';
import MyTeamList from './MyTeamList';
import TeamApply from './TeamApply';

const stores = {
  AuthStore: new AuthStore(),
  TeamListStore: new TeamListStore(),
  TeamMakeStore: new TeamMakeStore(),
  uploadStore: new uploadStore(),
  info: new info(),
  MyTeamList: new MyTeamList(),
  TeamApply: new TeamApply(),
};

export default stores;
