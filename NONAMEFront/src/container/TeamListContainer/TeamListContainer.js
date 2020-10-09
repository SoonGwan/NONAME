import { observer } from 'mobx-react';
import React, { useCallback, useEffect, useState } from 'react';
import useStores from 'lib/useStores';
import PostList from 'components/PostList/PostList';
import Main from 'components/Main';
import LoadingBoxList from 'components/common/LoadingBox/LoadingBoxList';
import FastAverageColor from 'fast-average-color';

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
  const [randomMessage, setRandomMessage] = useState('');

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

  const randomGreetingMessage = () => {
    const greetingMessageArray = [
      '널 위해 준비했어요.',
      '준비 한건 없는데 찾아볼래요?',
      '오늘은 내가 찾는 프로젝트가?',
      '오늘은 신비한 모험을 하는건 어떨까요? 🛫',
      '다시 돌아와서 우린 기뻐요! 😀',
      '가을 냄새 실-컷 즐기기 🍂',
      '반가워요 새로운 프로젝트를 찾아봐.',
      '아 글이 이렇게 써져있지요.',
      '📨 내가 찾는 프로젝트가 한눈에?!',
      '맘스터치',
    ];
    setRandomMessage(greetingMessageArray[Math.floor(Math.random() * 10)]);
  };

  useEffect(() => {
    resquestHandleTeamList();
  }, []);

  useEffect(() => {
    handleUserInfo();
  }, []);

  useEffect(() => {
    randomGreetingMessage();
  }, []);

  const ListMap = teamList.map((data) => {
    const { idx, teamName, whoMade, mainImage, teamMakeTime } = data;

    return (
      <>
        <PostList
          idx={idx}
          teamName={teamName}
          whoMade={whoMade}
          mainImage={mainImage}
          requestHandleTeamInfo={requestHandleTeamInfo}
          teamMakeTime={teamMakeTime}
        />
      </>
    );
  });

  return (
    <>
      {isLoading ? (
        <LoadingBoxList />
      ) : (
        <Main ListMap={ListMap} randomMessage={randomMessage} />
      )}
    </>
  );
});

export default TeamListContainer;
