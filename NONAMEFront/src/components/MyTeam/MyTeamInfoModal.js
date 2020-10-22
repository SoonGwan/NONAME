import React from 'react';
import Modal from 'components/common/Modal/Modal';
import page404 from 'components/assets/img/page404.png';

import {
  PostInfoStlyes,
  Thumbnail,
  TeamName,
  WhoMade,
  ContentWrap,
  ButtonWrap,
  DefaultButton,
  ApplyModalButton,
  ButtonWrapDM,
  ModifyButton,
  DeleteButton,
} from './MyTeamInfoModal.style';
import { IMG } from 'config/config.json';
import MyTeamModifyContainer from 'container/MyTeamContainer/MyTeamModifyContainer';

const MyTeamInfoModal = ({
  handleMyTeamInfoModal,
  userList,
  teamNames,
  whoMades,
  mainImages,
  explains,
  idxs,
  handleModifyTeamModal,
}) => {
  console.log(handleModifyTeamModal);
  return (
    <>
      <Modal handleClose={handleMyTeamInfoModal}>
        <PostInfoStlyes>
          <Thumbnail
            src={
              mainImages.includes('.png', '.jpeg', '.jpg', '.svg')
                ? IMG + mainImages
                : page404
            }
            alt=""
          />
          <TeamName>프로젝트 이름: {teamNames}</TeamName>
          <WhoMade>만든 사람 : {whoMades}</WhoMade>
        </PostInfoStlyes>
        <div>{userList}</div>
        <ButtonWrapDM>
          <ModifyButton onClick={() => handleModifyTeamModal()}>
            팀 내용 수정하기
          </ModifyButton>
          <DeleteButton>팀 영구 삭제하기</DeleteButton>
        </ButtonWrapDM>
      </Modal>
      <MyTeamModifyContainer />
    </>
  );
};

export default MyTeamInfoModal;
