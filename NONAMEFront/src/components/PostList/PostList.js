import React from 'react';
import './PostList.scss';
import TeamInfoContainer from 'container/TeamListContainer/TeamInfoContainer';

const PostList = ({
  idx,
  teamName,
  whoMade,
  mainImage,
  requestHandleTeamInfo,
}) => {
  return (
    <>
      <div
        className="PostList"
        key={idx}
        onClick={() => requestHandleTeamInfo(idx)}
      >
        <div className="PostList-Item">
          {/* <img className="PostList-Banner" src={mainImage}></img> */}
          <img className="PostList-Banner" src={mainImage} alt="" />
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
