import React from 'react';
import Modal from 'components/common/Modal/Modal';
import { IMG } from 'config/config.json';
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
        sadasgdahjsdgka
        {teamName}
        <img src={IMG + mainImage} alt="" />
        {whoMade}
        {explain}
      </Modal>
    </>
  );
};

export default PostInfo;
