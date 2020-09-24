import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/useStores';
import MyTeam from 'components/MyTeam/MyTeam';

const MyTeamContainer = observer(() => {
  const { store } = useStores();

  useEffect(() => {});

  return (
    <>
      <MyTeam />
    </>
  );
});

export default MyTeamContainer;
