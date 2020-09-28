import React, { useEffect, useCallback, useState } from 'react';
import { observer } from 'mobx-react';
import useStore from 'lib/useStores';
import PostModal from 'components/PostList/PostApply/PostApply';
import { ToastContainer, toast } from 'react-toastify';

const TeamApplyContainer = observer(() => {
  toast.configure();
  const [team_apply_reason, setTeam_apply_reason] = useState('');
  const [team_connect, setTeam_connect] = useState('');
  const { store } = useStore();
  const { handleApplyTeam, applyModal, handleApplyModal } = store.TeamApply;
  const { idx } = store.TeamListStore;
  console.log(idx);
  const requestHandleApplyTeam = useCallback(async () => {
    if (!localStorage.getItem('name')) {
      toast.error('로그인 후 사용해주세요.', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      return;
    }

    const data = {
      user_id: localStorage.getItem('name'),
      apply_team_idx: idx,
      team_apply_reason,
      team_connect,
    };

    try {
      const response = await handleApplyTeam(data);
      console.log(response);
      handleApplyModal();
    } catch (error) {
      console.log(error);

      return error;
    }
  });
  return (
    <>
      {applyModal && (
        <PostModal
          handleApplyModal={handleApplyModal}
          isPress={applyModal}
          requestHandleApplyTeam={requestHandleApplyTeam}
          team_apply_reason={team_apply_reason}
          setTeam_apply_reason={setTeam_apply_reason}
          team_connect={team_connect}
          setTeam_connect={setTeam_connect}
        />
      )}
    </>
  );
});

export default TeamApplyContainer;
