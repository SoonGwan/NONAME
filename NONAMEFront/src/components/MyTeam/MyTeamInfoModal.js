import React from 'react';
import Modal from 'components/common/Modal/Modal';

const MyTeamInfoModal = ({ handleMyTeamInfoModal, userList }) => {
  return (
    <>
      <Modal handleClose={handleMyTeamInfoModal}>
        <div>{userList}</div>
      </Modal>
    </>
  );
};

export default MyTeamInfoModal;
