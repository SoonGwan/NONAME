import AuthStore from './Auth';
import TeamListStore from './TeamList/TeamListStore';
import TeamMakeStore from './TeamMake/TeamMakeStore';
import uploadStore from './upload/uploadStore';
import info from './MyInfo/MyInfoStore';
import MyTeamList from './MyTeamList/MyTeamListStore';
import TeamApply from './TeamApply/TeamApplyStore';

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
