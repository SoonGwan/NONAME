import React from 'react';
import PostList from 'components/PostList/PostList';
import TeamInfoContainer from 'container/TeamListContainer/TeamInfoContainer';
import { MainStyles, MainPinStyles } from './Main.style';
import SliderContainer from 'container/SliderContainer/SliderContainer';
const Main = ({ ListMap, randomMessage }) => {
  return (
    <>
      <MainPinStyles>{randomMessage}</MainPinStyles>
      <MainStyles>{ListMap}</MainStyles>
      <TeamInfoContainer />
    </>
  );
};

export default Main;
