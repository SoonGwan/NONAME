import React from 'react';
import './Main.scss';
import PostList from 'components/PostList/PostList';

const Main = () => {
  return (
    <>
      <div className="Main">
        <PostList />
      </div>
    </>
  );
};

export default Main;
