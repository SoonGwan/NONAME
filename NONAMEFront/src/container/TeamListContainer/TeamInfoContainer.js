import React from 'react';
import useStore from 'lib/useStores';
import { observer } from 'mobx-react';
import PostInfo from 'components/PostList/PostInfo/PostInfo';

const TeamInfoContainer = observer(() => {
  const { store } = useStore();
  const { isInfoModal, handleInfoModal } = store.TeamListStore;

  return (
    <>{isInfoModal ? <PostInfo handleInfoModal={handleInfoModal} /> : null}</>
  );
});

export default TeamInfoContainer;
