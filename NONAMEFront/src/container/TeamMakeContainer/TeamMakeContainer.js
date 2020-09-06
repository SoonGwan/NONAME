import React, { useCallback, useEffect, useState, useRef } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/useStores';
import Write from 'components/Write/Write';

const TeamMakeContainer = observer(() => {
  const { store } = useStores();
  const { handleTeamMake } = store.TeamMakeStore;
  const { handleUpLoad, imgURL } = store.uploadStore;
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
    console.log(newValue);
    setValue(newValue);
    // console.log(mdEditor.current.getMdValue());
    //
    //
  };
  const requestHandleTeamMake = useCallback(async () => {
    const data = {
      teamName,
      explain: value,
      mainImage,
      whoMade,
    };
    try {
      const response = await handleTeamMake(data);
      console.log(response);
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