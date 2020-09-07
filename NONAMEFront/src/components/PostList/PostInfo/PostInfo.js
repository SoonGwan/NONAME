import React from 'react';
import Modal from 'components/common/Modal/Modal';

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
        {whoMade}
        {mainImage}
        {explain}
      </Modal>
    </>
  );
};

export default PostInfo;
