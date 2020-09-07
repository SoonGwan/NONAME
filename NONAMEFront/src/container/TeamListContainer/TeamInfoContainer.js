import React from 'react';
import useStore from 'lib/useStores';
import { observer } from 'mobx-react';
import PostInfo from 'components/PostList/PostInfo/PostInfo';

const TeamInfoContainer = observer(() => {
  const { store } = useStore();
  const {
    isInfoModal,
    handleInfoModal,
    teamName,
    whoMade,
    mainImage,
    explain,
  } = store.TeamListStore;
  console.log(teamName);
  return (
    <>
      {isInfoModal ? (
        <PostInfo
          handleInfoModal={handleInfoModal}
          teamName={teamName}
          whoMade={whoMade}
          mainImage={mainImage}
          explain={explain}
        />
      ) : null}
    </>
  );
});

export default TeamInfoContainer;
