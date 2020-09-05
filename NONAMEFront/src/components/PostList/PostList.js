import React from 'react';
import './PostList.scss';

const PostList = ({ idx, teamName, whoMade, mainImage }) => {
  return (
    <>
      <div className="PostList" key={idx}>
        <div className="PostList-Item">
          <img className="PostList-Banner" src={mainImage}></img>
          <div className="PostList-Wrap">
            <div className="PostList-Wrap-Title">{teamName}</div>
            <div className="PostList-Wrap-whoMade">
              <div className="PostList-Wrap-whoMade-Name">
                Made In {whoMade}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostList;
