import React, { useEffect, useCallback } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/useStores';
import MyTeamInfoModal from 'components/MyTeam/MyTeamInfoModal';

const MyTeamInfoContainer = observer(() => {
  const { store } = useStores();
  const { myTeamInfoModal, handleMyTeamInfoModal } = store.MyTeamList;

  return (
    <>
      {myTeamInfoModal && (
        <MyTeamInfoModal handleMyTeamInfoModal={handleMyTeamInfoModal} />
      )}
    </>
  );
});

export default MyTeamInfoContainer;
