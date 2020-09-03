import React from 'react';
import './PostList.scss';

const PostList = () => {
  return (
    <>
      <div className="PostList">
        <div className="PostList-Item">
          <div className="PostList-Banner"></div>
          <div className="PostList-Wrap">
            <div className="PostList-Wrap-Title">
              누구세요? 하는 프로젝트를 만드는 사람
            </div>
            <div className="PostList-Wrap-whoMade">
              <div className="PostList-Wrap-whoMade-Name">Made In 순관</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
