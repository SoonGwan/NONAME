import React, { useEffect, useCallback, useState } from 'react';
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

  const { handleApplyModal } = store.TeamApply;

  return (
    <>
      {isInfoModal ? (
        <PostInfo
          handleInfoModal={handleInfoModal}
          teamName={teamName}
          whoMade={whoMade}
          mainImage={mainImage}
          explain={explain}
          isInfoModal={isInfoModal}
          handleApplyModal={handleApplyModal}
        />
      ) : null}
    </>
  );
});

export default TeamInfoContainer;
