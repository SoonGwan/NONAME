import React from 'react';
import {
  LoadingBoxListStyles,
  PostListStyles,
  PostItem,
  PostImg,
  PostWrap,
  PostWrapTitle,
  PostWriterWrap,
  PostWriterName,
} from './LoadingBox.style';
import Skeleton from 'react-loading-skeleton';
const LoadingBoxList = () => {
  return (
    <>
      <LoadingBoxListStyles>
        <PostListStyles>
          <PostItem>
            <Skeleton width={300} height={150} />
            <PostWrap>
              <Skeleton width={190} height={38} />
              <Skeleton width={100} height={38} />
            </PostWrap>
          </PostItem>
        </PostListStyles>
        <PostListStyles>
          <PostItem>
            <Skeleton width={300} height={150} />
            <PostWrap>
              <Skeleton width={190} height={38} />
              <Skeleton width={100} height={38} />
            </PostWrap>
          </PostItem>
        </PostListStyles>
      </LoadingBoxListStyles>
    </>
  );
};

export default LoadingBoxList;
