import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/useStores';
import MyTeam from 'components/MyTeam/MyTeam';
import PostList from 'components/PostList/PostList';
import { RiSignalWifiErrorLine } from 'react-icons/ri';

const MyTeamContainer = observer(() => {
  const { store } = useStores();
  const {
    handleMyTeamList,
    myTeam,
    handleTeamApplyList,
    myTeamApply_user,
    handleMyTeamInfoModal,
  } = store.MyTeamList;
  console.log('myTeam', myTeam);
  const requestHandleMyTeamList = useCallback(async () => {
    try {
      const name = localStorage.getItem('name');
      await handleMyTeamList(name);
    } catch (error) {
      return error;
    }
  });

  const requestHandleTeamInfo = useCallback(async (idx) => {
    try {
      const response = await handleTeamApplyList(idx);

      console.log(response);
      handleMyTeamInfoModal();
    } catch (error) {
      console.log(error);
      return error;
    }
  });

  useEffect(() => {
    requestHandleMyTeamList();
  }, []);

  const ListMap = myTeam.map((data) => {
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
      <MyTeam ListMap={ListMap} />
    </>
  );
});

export default MyTeamContainer;
