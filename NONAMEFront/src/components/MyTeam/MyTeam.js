import React from 'react';
import { MainStyles } from '../Main/Main.style';
import MyTeamInfoModalContainer from 'container/MyTeamContainer/MyTeamInfoContainer/MyTeamInfoContainer';
import {
  NoExitTeam,
  NoTitle,
  MakeTeamTitle,
  SmallExp,
} from './MyTeamInfoModal.style';
const MyTeam = ({ ListMap }) => {
  return (
    <>
      {ListMap.length <= 0 ? (
        <NoExitTeam>
          <NoTitle>
            <MakeTeamTitle>
              터엉... 비었네... 아무것도 없구나..
              <SmallExp>팀을 이루어 프로젝트를 완성해봐요.</SmallExp>
            </MakeTeamTitle>
          </NoTitle>
        </NoExitTeam>
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
