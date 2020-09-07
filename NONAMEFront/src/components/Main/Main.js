import React from 'react';
import './Main.scss';
import PostList from 'components/PostList/PostList';
import TeamInfoContainer from 'container/TeamListContainer/TeamInfoContainer';

const Main = ({ ListMap }) => {
  return (
    <>
      <div className="Main">{ListMap}</div>
      <TeamInfoContainer />
    </>
  );
};

export default Main;
