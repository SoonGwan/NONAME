import React from 'react';
import TeamInfoContainer from 'container/TeamListContainer/TeamInfoContainer';
import page404 from 'components/assets/img/page404.png';
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
          <PostImg
            src={
              mainImage.includes('.png', '.jpeg', '.jpg', '.svg')
                ? mainImage
                : page404
            }
            alt={mainImage}
          />
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
