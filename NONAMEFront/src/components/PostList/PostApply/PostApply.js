import React from 'react';
import Modal from 'components/common/Modal/Modal';
import {
  InputPostApply,
  InputExp,
  InputPhone,
  ApplyButton,
} from './PostApply.style';
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
        <InputExp>팀에 가입하고 싶은 이유 한줄!</InputExp>
        <InputPostApply
          type="text"
          value={team_apply_reason}
          onChange={(e) => setTeam_apply_reason(e.target.value)}
        />
        <InputPhone>연락처를 남겨주세요!</InputPhone>
        <InputPostApply
          type="text"
          value={team_connect}
          onChange={(e) => setTeam_connect(e.target.value)}
        />
        <ApplyButton onClick={() => requestHandleApplyTeam()}>
          ApplyButton
        </ApplyButton>
      </Modal>
    </>
  );
};

export default PostApply;
