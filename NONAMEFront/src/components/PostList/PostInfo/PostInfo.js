import React from 'react';
import Modal from 'components/common/Modal/Modal';
import Markdown from 'markdown-to-jsx';
import { IMG } from 'config/config.json';
import page404 from 'components/assets/img/page404.png';
import './PostInfo.scss';
import {
  PostInfoStlyes,
  Thumbnail,
  TeamName,
  WhoMade,
  ContentWrap,
  ButtonWrap,
  DefaultButton,
  ApplyModalButton,
} from './PostInfo.style';
import TeamApplyContainer from 'container/TeamListContainer/TeamApplyContainer';
const PostInfo = ({
  handleInfoModal,
  teamName,
  whoMade,
  mainImage,
  explain,
  isInfoModal,
  handleApplyModal,
}) => {
  // if (mainImage.length <= 0) {
  //   return mainImage === page404;
  // }

  return (
    <>
      <Modal
        handleClose={handleInfoModal}
        width={'640px'}
        height={'920px'}
        isPress={isInfoModal}
      >
        <PostInfoStlyes>
          <Thumbnail
            src={
              // mainImage.includes('.png', '.jpeg', '.jpg', '.svg', 'JPG')
              //   ? IMG + mainImage
              //   : page404
              !mainImage ? page404 : IMG + mainImage
            }
            alt=""
          />
          <TeamName>프로젝트 이름: {teamName}</TeamName>
          <WhoMade>만든 사람 : {whoMade}</WhoMade>
          <div className="markdown-body">
            <ContentWrap>
              <Markdown options={{ forceBlock: true }}>{explain}</Markdown>
            </ContentWrap>
          </div>
        </PostInfoStlyes>
        <ButtonWrap></ButtonWrap>
        <ApplyModalButton onClick={() => handleApplyModal()}>
          팀에 신청할래요!
        </ApplyModalButton>
      </Modal>
      <TeamApplyContainer />
    </>
  );
};

export default PostInfo;
