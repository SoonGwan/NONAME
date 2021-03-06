import React, { useCallback, useEffect, useState, useRef } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/useStores';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Slider from 'components/common/Slider/Slider';

const SliderContainer = observer(() => {
  toast.configure();
  const { store } = useStores();
  const { handleTeamList, imgList } = store.TeamListStore;

  const requestHandleTeamList = useCallback(async () => {
    try {
      await handleTeamList();
    } catch (err) {
      return err;
    }
  });

  useEffect(() => {
    requestHandleTeamList();
  }, []);

  return (
    <>
      <Slider imgList={imgList} />
    </>
  );
});

export default SliderContainer;
