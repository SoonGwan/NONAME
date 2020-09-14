import React from 'react';
import PostList from 'components/PostList/PostList';
import TeamInfoContainer from 'container/TeamListContainer/TeamInfoContainer';
import { MainStyles } from './Main.style';
const Main = ({ ListMap }) => {
  return (
    <>
      <MainStyles>{ListMap}</MainStyles>
      <TeamInfoContainer />
    </>
  );
};

export default Main;
