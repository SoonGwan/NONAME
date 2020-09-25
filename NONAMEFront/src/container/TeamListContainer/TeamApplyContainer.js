import React, { useEffect, useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import useStore from 'lib/useStores';
import PostModal from 'components/PostList/PostApply/PostApply';
const TeamApplyContainer = observer(() => {
  const { store } = useStore();
  const { handleApplyTeam, applyModal } = store.TeamApply;
  const { idx } = store.TeamListStore;
  const requestHandleApplyTeam = useCallback(async () => {
    const data = {
      user_id: localStorage.getItem('name'),
      apply_team_idx: idx,
      team_apply_reason,
    };
    try {
      const response = await handleApplyTeam(data);
      console.log(response);
    } catch (error) {
      console.log(error);
      return error;
    }
  });
  return (
    <>
      {applyModal && (
        <PostModal requestHandleApplyTeam={requestHandleApplyTeam} />
      )}
    </>
  );
});

export default TeamApplyContainer;
