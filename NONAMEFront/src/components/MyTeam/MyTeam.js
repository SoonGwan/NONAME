import React from 'react';
import { MainStyles } from '../Main/Main.style';
import MyTeamInfoModalContainer from 'container/MyTeamContainer/MyTeamInfoContainer/MyTeamInfoContainer';
const MyTeam = ({ ListMap }) => {
  return (
    <>
      {ListMap.length <= 0 ? (
        <div> '팀을 만들어 보는 건 어떨까요?'</div>
      ) : (
        <>
          <MainStyles>{ListMap}</MainStyles>
          <MyTeamInfoModalContainer />
        </>
      )}
    </>
  );
};

export default MyTeam;
