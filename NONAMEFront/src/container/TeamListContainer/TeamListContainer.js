import { observer } from 'mobx-react';
import React, { useCallback, useEffect, useState } from 'react';
import useStores from 'lib/useStores';
import PostList from 'components/PostList/PostList';
import Main from 'components/Main';

const TeamListContainer = observer(() => {
  const { store } = useStores();
  const { handleTeamList, teamList } = store.TeamListStore;

  // const resquestHandleTeamList = useCallback(async () => {
  //   try {
  //     await handleTeamList();
  //   } catch (error) {
  //     return error;
  //   }
  // });

  useEffect(() => {
    handleTeamList();
  }, []);

  // const test =
  //   teamList &&
  //   teamList.map((data) => {
  //     const { whoMade } = data;
  //     return (
  //       <div>
  //         <div>{whoMade}</div>
  //       </div>
  //     );
  //   });

  return (
    <>
      <Main teamList={teamList} />
    </>
  );
});

export default TeamListContainer;
