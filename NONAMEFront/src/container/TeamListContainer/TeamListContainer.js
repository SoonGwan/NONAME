import { observer } from 'mobx-react';
import React, { useCallback, useEffect, useState } from 'react';
import useStores from 'lib/useStores';
import PostList from 'components/PostList/PostList';
import Main from 'components/Main';

const TeamListContainer = observer(() => {
  const { store } = useStores();
  const { handleTeamList, teamList, handleTeamInfo } = store.TeamListStore;
  console.log('teamList', teamList);
  const resquestHandleTeamList = useCallback(async () => {
    try {
      await handleTeamList();
    } catch (error) {
      return error;
    }
  }, [handleTeamList]);

  const requestHandleTeamInfo = useCallback(
    async (idx) => {
      try {
        const response = await handleTeamInfo(idx);
        console.log(response);
        return response;
      } catch (error) {
        return error;
      }
    },
    [handleTeamInfo]
  );

  useEffect(() => {
    resquestHandleTeamList();
  }, []);

  const ListMap = teamList.map((data) => {
    const { idx, teamName, whoMade, mainImage } = data;
    return (
      <>
        <PostList
          idx={idx}
          teamName={teamName}
          whoMade={whoMade}
          mainImage={mainImage}
          requestHandleTeamInfo={requestHandleTeamInfo}
        />
      </>
    );
  });

  return (
    <>
      <Main ListMap={ListMap} />
    </>
  );
});

export default TeamListContainer;
