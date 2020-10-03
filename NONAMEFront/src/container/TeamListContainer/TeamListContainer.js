import { observer } from 'mobx-react';
import React, { useCallback, useEffect, useState } from 'react';
import useStores from 'lib/useStores';
import PostList from 'components/PostList/PostList';
import Main from 'components/Main';
import LoadingBoxList from 'components/common/LoadingBox/LoadingBoxList';

const TeamListContainer = observer(() => {
  const { store } = useStores();
  const {
    handleTeamList,
    teamList,
    handleTeamInfo,
    handleInfoModal,
    handleInfoContent,
  } = store.TeamListStore;

  const { handleUserInfo, userName } = store.AuthStore;
  const [isLoading, setIsLoading] = useState(false);

  const resquestHandleTeamList = useCallback(async () => {
    setIsLoading(true);
    try {
      await handleTeamList();
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      return error;
    }
  }, [handleTeamList]);

  const requestHandleTeamInfo = useCallback(
    async (idx) => {
      try {
        const response = await handleTeamInfo(idx);
        console.log('response', response);
        const { explain, mainImage, teamName, whoMade } = response.data.team;
        handleInfoContent({ teamName, mainImage, explain, whoMade, idx });
        handleInfoModal();
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
  useEffect(() => {
    handleUserInfo();
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

  return <>{isLoading ? <LoadingBoxList /> : <Main ListMap={ListMap} />}</>;
});

export default TeamListContainer;
