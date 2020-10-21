import React, { useCallback, useEffect } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/useStores';
import MyTeam from 'components/MyTeam/MyTeam';
import PostList from 'components/PostList/PostList';
import { withRouter } from 'react-router-dom';
import { RiSignalWifiErrorLine } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import { IMG } from 'config/config.json';
const MyTeamContainer = observer(({ history }) => {
  const { store } = useStores();
  const {
    handleMyTeamList,
    myTeam,
    handleTeamApplyList,
    myTeamApply_user,
    handleMyTeamInfoModal,
    handleInfoContent,
    handleMyTeamInfo,
  } = store.MyTeamList;

  if (!localStorage.getItem('name')) {
    history.push('/');
    toast.error('로그인 후 이용해주세요!', {
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
      const response = await handleMyTeamInfo(idx);
      await handleTeamApplyList(idx);
      const { teamName, explain, mainImage, whoMade } = response.data.team;

      handleMyTeamInfoModal();
      handleInfoContent({ teamName, explain, mainImage, whoMade, idx });
      console.log(teamNames);
      // console.log(teamName);
    } catch (error) {
      return error;
    }
  }, []);

  useEffect(() => {
    requestHandleMyTeamList();
  }, []);

  const ListMap = myTeam.map((data) => {
    const { idx, teamName, whoMade, mainImage, teamMakeTime } = data;

    return (
      <>
        <PostList
          idx={idx}
          teamName={teamName}
          whoMade={whoMade}
          mainImage={IMG + mainImage}
          requestHandleTeamInfo={requestHandleTeamInfo}
          teamMakeTime={teamMakeTime}
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

export default withRouter(MyTeamContainer);
