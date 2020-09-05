import React from 'react';
import './Main.scss';
import PostList from 'components/PostList/PostList';

const Main = ({ ListMap }) => {
  return (
    <>
      <div className="Main">{ListMap}</div>
    </>
  );
};

export default Main;
