import React, { useEffect, useCallback } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/useStores';
import MyTeamInfoModal from 'components/MyTeam/MyTeamInfoModal';
import { ToastContainer, toast } from 'react-toastify';

const MyTeamInfoContainer = observer(() => {
  const { store } = useStores();
  const {
    myTeamInfoModal,
    handleMyTeamInfoModal,
    myTeamApply_user,
    handleMyTeamInfo,
    teamNames,
    whoMade,
    mainImages,
    explain,
    idxs,
    handleModifyTeamModal,
    handleDeleteMyTeam,
    handleMyTeamList,
  } = store.MyTeamList;
  const requestDeleteMyTeam = useCallback(async (idx) => {
    try {
      const response = await handleDeleteMyTeam(idx);
      console.log(response);
      const { status } = response;
      if (status === 200) {
        toast.success('해당팀을 삭제하였습니다.', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        requestHandleMyTeamList();
        handleMyTeamInfoModal();
        return;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  });
  const requestHandleMyTeamList = useCallback(async () => {
    try {
      const name = localStorage.getItem('name');
      await handleMyTeamList(name);
    } catch (error) {
      return error;
    }
  });
  const userList = myTeamApply_user.map((data) => {
    const {
      apply_team_idx,
      apply_time,
      idx,
      team_apply_reason,
      user_id,
    } = data;

    return (
      <>
        <div>
          {apply_team_idx},{apply_time},{idx},{team_apply_reason},{user_id}
        </div>
      </>
    );
  });
  return (
    <>
      {myTeamInfoModal && (
        <MyTeamInfoModal
          handleMyTeamInfoModal={handleMyTeamInfoModal}
          userList={userList}
          handleMyTeamInfo={handleMyTeamInfo}
          teamNames={teamNames}
          whoMade={whoMade}
          mainImages={mainImages}
          explain={explain}
          idxs={idxs}
          handleModifyTeamModal={handleModifyTeamModal}
          requestDeleteMyTeam={requestDeleteMyTeam}
        />
      )}
    </>
  );
});

export default MyTeamInfoContainer;
