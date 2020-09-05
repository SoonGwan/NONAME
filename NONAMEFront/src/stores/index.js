import AuthStore from './Auth';
import TeamListStore from './TeamList/TeamListStore';

const stores = {
  AuthStore: new AuthStore(),
  TeamListStore: new TeamListStore(),
};

export default stores;
