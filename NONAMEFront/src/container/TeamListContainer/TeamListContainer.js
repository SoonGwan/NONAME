import { observer } from 'mobx-react';
import React, { useCallback, useEffect, useState } from 'react';
import useStores from 'lib/useStores';
import PostList from 'components/PostList/PostList';
import Main from 'components/Main';

const TeamListContainer = observer(() => {
  const { store } = useStores();
  const { handleTeamList, teamList } = store.TeamListStore;
  console.log('teamList', teamList);
  const resquestHandleTeamList = useCallback(async () => {
    try {
      await handleTeamList();
    } catch (error) {
      return error;
    }
  }, [handleTeamList]);

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
