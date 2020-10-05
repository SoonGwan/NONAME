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
} from './MyTeamInfoModal.style';
import { IMG } from 'config/config.json';

const MyTeamInfoModal = ({
  handleMyTeamInfoModal,
  userList,
  teamName,
  whoMade,
  mainImage,
  explain,
  idx,
}) => {
  return (
    <>
      <Modal handleClose={handleMyTeamInfoModal}>
        <PostInfoStlyes>
          <Thumbnail
            src={
              mainImage.includes('.png', '.jpeg', '.jpg', '.svg')
                ? IMG + mainImage
                : page404
            }
            alt=""
          />
          <TeamName>프로젝트 이름: {teamName}</TeamName>
          <WhoMade>만든 사람 : {whoMade}</WhoMade>
        </PostInfoStlyes>
        <div>{userList}</div>
      </Modal>
    </>
  );
};

export default MyTeamInfoModal;
