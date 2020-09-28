import React from 'react';
import Modal from 'components/common/Modal/Modal';

const PostApply = ({
  handleApplyModal,
  isPress,
  team_apply_reason,
  setTeam_apply_reason,
  team_connect,
  setTeam_connect,
  requestHandleApplyTeam,
}) => {
  return (
    <>
      <Modal
        width={'480px'}
        height={'480px'}
        handleClose={handleApplyModal}
        isPress={isPress}
      >
        <input
          type="text"
          value={team_apply_reason}
          onChange={(e) => setTeam_apply_reason(e.target.value)}
        />
        <input
          type="text"
          value={team_connect}
          onChange={(e) => setTeam_connect(e.target.value)}
        />
        <button onClick={() => requestHandleApplyTeam()}>button</button>
      </Modal>
    </>
  );
};

export default PostApply;
