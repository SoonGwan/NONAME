import React from 'react';
import Modal from 'components/common/Modal/Modal';
import Markdown from 'markdown-to-jsx';
import { IMG } from 'config/config.json';
import { PostInfoStlyes, Thumbnail, TeamName, WhoMade } from './PostInfo.style';
const PostInfo = ({
  handleInfoModal,
  teamName,
  whoMade,
  mainImage,
  explain,
}) => {
  return (
    <>
      <Modal handleClose={handleInfoModal} width={'640px'} height={'1024px'}>
        <PostInfoStlyes>
          <Thumbnail src={IMG + mainImage} alt="" />
          <TeamName>프로젝트 이름: {teamName}</TeamName>
          <WhoMade>만든 사람 : {whoMade}</WhoMade>
          <Markdown options={{ forceBlock: true }}>{explain}</Markdown>
        </PostInfoStlyes>
      </Modal>
    </>
  );
};

export default PostInfo;
