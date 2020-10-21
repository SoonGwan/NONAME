import React, { useEffect, useCallback } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/useStores';
import MyTeamInfoModal from 'components/MyTeam/MyTeamInfoModal';

const MyTeamInfoContainer = observer(() => {
  const { store } = useStores();
  const {
    myTeamInfoModal,
    handleMyTeamInfoModal,
    myTeamApply_user,
    handleMyTeamInfo,
    teamName,
    whoMade,
    mainImage,
    explain,
    idx,
    handleModifyTeamModal,
  } = store.MyTeamList;

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
          teamName={teamName}
          whoMade={whoMade}
          mainImage={mainImage}
          explain={explain}
          idx={idx}
          handleModifyTeamModal={handleModifyTeamModal}
        />
      )}
    </>
  );
});

export default MyTeamInfoContainer;
