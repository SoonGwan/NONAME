import React from 'react';
import TeamInfoContainer from 'container/TeamListContainer/TeamInfoContainer';
import {
  PostListStyles,
  PostItem,
  PostImg,
  PostWrap,
  PostWrapTitle,
  PostWriterWrap,
  PostWriterName,
} from './PostList.style';
const PostList = ({
  idx,
  teamName,
  whoMade,
  mainImage,
  requestHandleTeamInfo,
}) => {
  return (
    <>
      <PostListStyles onClick={() => requestHandleTeamInfo(idx)}>
        <PostItem>
          <PostImg src={mainImage} alt={mainImage} />
          <PostWrap>
            <PostWrapTitle>{teamName}</PostWrapTitle>
            <PostWriterWrap className="PostList-Wrap-whoMade">
              <PostWriterName className="PostList-Wrap-whoMade-Name">
                Made In {whoMade}
              </PostWriterName>
            </PostWriterWrap>
          </PostWrap>
        </PostItem>
      </PostListStyles>
    </>
  );
};

export default PostList;
