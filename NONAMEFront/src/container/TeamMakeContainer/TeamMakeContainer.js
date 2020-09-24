import React, { useCallback, useEffect, useState, useRef } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/useStores';
import Write from 'components/Write/Write';

const TeamMakeContainer = observer(() => {
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
    } catch (error) {
      return error;
    }
  });

  const requestHandleUpLoad = useCallback(async () => {
    try {
      const response = await handleUpLoad(image);
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

export default TeamMakeContainer;
