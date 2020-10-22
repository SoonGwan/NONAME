import React, { useEffect, useCallback, useState } from 'react';
import useStore from 'lib/useStores';
import { observer } from 'mobx-react';
import Write from 'components/Write/Write';
import Modal from 'components/common/Modal/Modal';
import ModiftyWrite from 'components/Write/ModifyWrite';
import { ToastContainer, toast } from 'react-toastify';
const MyTeamModifyContainer = observer(() => {
  const { store } = useStore();
  const {
    myTeamInfoModal,
    handleMyTeamInfoModal,
    myTeamApply_user,
    handleMyTeamInfo,
    teamNames,
    whoMades,
    mainImages,
    explains,
    idxs,
    modifyModal,
    handleModifyTeamModal,
    handleModifyMyTeam,
  } = store.MyTeamList;
  const [teamName, setTeamName] = useState('');
  const [explain, setExplain] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [value, setValue] = useState('');

  const handleEditorChange = ({ html, text }) => {
    const newValue = text.replace(/\d/g, '');
    setValue(newValue);
  };

  const requestHandleModifyMyTeam = useCallback(
    async (idx) => {
      const request = {
        teamName,
        explain: value,
        mainImage,
      };

      try {
        const response = await handleModifyMyTeam(request, idx);
        const { status } = response;
        if (status === 200) {
          toast.success('성공적으로 수정을 하였습니다.', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          handleMyTeamInfoModal();
          handleModifyTeamModal();
          handleMyTeamList();
          return;
        }
      } catch (error) {
        const { status } = error;
        if (status === 400) {
          toast.error('글이 터엉 비어있어요!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        } else if (status === 404) {
          toast.error('존재하지 않는 팀입니다!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        } else if (status === 500) {
          toast.error('서버 오류!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          return;
        }
        return error;
      }
    },
    [teamName, explain, value, mainImage, idxs]
  );

  const requestHandleModifyTeamModal = useCallback(() => {
    handleModifyTeamModal();
    setTeamName(teamNames);
    setValue(explains);
  }, [setTeamName, teamNames, setValue]);

  useEffect(() => {
    setTeamName(teamNames);
    setValue(explains);
    setMainImage(mainImages);
  }, [teamNames, setTeamName, explains, setExplain, setValue]);

  return (
    <>
      {modifyModal && (
        <Modal width={'700px'} handleClose={requestHandleModifyTeamModal}>
          <ModiftyWrite
            style={{ width: '100%' }}
            teamName={teamName}
            setTeamName={setTeamName}
            handleEditorChange={handleEditorChange}
            explain={explain}
            setExplain={setExplain}
            value={value}
            setValue={setValue}
            requestHandleModifyMyTeam={requestHandleModifyMyTeam}
            idx={idxs}
          />
        </Modal>
      )}
    </>
  );
});

export default MyTeamModifyContainer;
