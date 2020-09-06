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
  const mdEditor = useRef(null);
  const [pictures, setPictures] = useState();

  const onDrop = (picture) => {
    setPictures(picture);
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
      mainImage: pictures[0],
      whoMade,
    };
    console.log(data);
    try {
      const response = await handleTeamMake(data);
      console.log(response);
    } catch (error) {
      console.log(error);
      return error;
    }
  });

  const requestHandleUpLoad = useCallback(async () => {
    const data = {
      pictures: pictures[0].name,
    };
    console.log(data);
    try {
      const response = await handleUpLoad(data);
      console.log(response);
    } catch (error) {
      console.log(error);
      return error;
    }
  });

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
        pictures={pictures}
        setPictures={setPictures}
        requestHandleUpLoad={requestHandleUpLoad}
      />
    </>
  );
});

export default TeamMakeContainer;
