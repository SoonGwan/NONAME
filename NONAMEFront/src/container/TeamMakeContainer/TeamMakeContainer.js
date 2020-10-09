import React, { useCallback, useEffect, useState, useRef } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/useStores';
import Write from 'components/Write/Write';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const TeamMakeContainer = observer(({ history }) => {
  toast.configure();
  const { store } = useStores();
  const { handleTeamMake } = store.TeamMakeStore;
  const { handleUpLoad, imgURL } = store.uploadStore;
  const { handleUserInfo, userName } = store.AuthStore;
  const [value, setValue] = useState();
  const [teamName, setTeamName] = useState('');
  const [mainImage, setMainImage] = useState('');
  const [whoMade, setWhoMade] = useState('');
  const [image, setImage] = useState();
  const mdEditor = useRef(null);

  if (!localStorage.getItem('name')) {
    history.push('/');
    toast.error('로그인 후 이용해주세요!', {
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

  const onDrop = (e) => {
    setImage(e.target.files);
  };

  const handleEditorChange = ({ html, text }) => {
    const newValue = text.replace(/\d/g, '');
    setValue(newValue);
  };
  const requestHandleTeamMake = useCallback(async () => {
    const data = {
      teamName,
      explain: value,
      mainImage: imgURL,
      whoMade: userName,
    };
    try {
      const response = await handleTeamMake(data);
      const { status } = response;
      if (status === 200) {
        toast.success('팀을 성공적으로 만들었어요!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        history.push('/myTeam');
      }
    } catch (error) {
      return error;
    }
  });

  const requestHandleUpLoad = useCallback(async () => {
    try {
      const response = await handleUpLoad(image);
      console.log(response);
    } catch (error) {
      return error;
    }
  }, [image]);
  useEffect(() => {
    handleUserInfo();
  }, []);
  return (
    <>
      <Write
        value={value}
        setValue={setValue}
        mdEditor={mdEditor}
        handleEditorChange={handleEditorChange}
        requestHandleTeamMake={requestHandleTeamMake}
        teamName={teamName}
        setTeamName={setTeamName}
        mainImage={mainImage}
        setMainImage={setMainImage}
        whoMade={whoMade}
        setWhoMade={setWhoMade}
        onDrop={onDrop}
        image={image}
        setImage={setImage}
        requestHandleUpLoad={requestHandleUpLoad}
      />
    </>
  );
});

export default withRouter(TeamMakeContainer);
