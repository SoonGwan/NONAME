import React, { useEffect, useCallback, useState } from 'react';
import useStore from 'lib/useStores';
import { observer } from 'mobx-react';
import Write from 'components/Write/Write';
import Modal from 'components/common/Modal/Modal';
import ModiftyWrite from 'components/Write/ModifyWrite';

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
  //   console.log(idx, mainImage, explain, tseamName);
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
        console.log(response);
      } catch (error) {
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
  console.log('teamNames', teamNames);

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
