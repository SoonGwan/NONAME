import React, { useCallback, useEffect, useState, useRef } from 'react';
import { observer } from 'mobx-react';
import useStores from 'lib/useStores';
import { withRouter } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Slider from 'components/common/Slider/Slider';

const SliderContainer = observer(() => {
  toast.configure();
  const { store } = useStores();
  const { handleTeamList, teamList } = store.TeamListStore;
  const [list, setList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const requestHandleTeamList = async () => {
    try {
      const response = await handleTeamList();
      imgPush();
    } catch (err) {
      return err;
    }
  };

  const imgPush = () => {
    teamList.map((data) => {
      const { mainImage, teamName } = data;
      setList(...[mainImage]);
    });
  };

  useEffect(() => {
    requestHandleTeamList();
  }, []);

  return (
    <>
      <Slider teamList={teamList} list={list} />
    </>
  );
});

export default SliderContainer;
