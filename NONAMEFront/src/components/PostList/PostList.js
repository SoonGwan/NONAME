import React, { useState } from 'react';
import TeamInfoContainer from 'container/TeamListContainer/TeamInfoContainer';
import page404 from 'components/assets/img/page404.png';
import FastAverageColor from 'fast-average-color';

import {
  PostListStyles,
  PostItem,
  PostImg,
  PostWrap,
  PostWrapTitle,
  PostWriterWrap,
  PostWriterName,
} from './PostList.style';
import Skeleton from 'react-loading-skeleton';
const PostList = ({
  idx,
  teamName,
  whoMade,
  mainImage,
  requestHandleTeamInfo,
}) => {
  const [color, setColor] = useState('');
  var fac = new FastAverageColor();
  fac
    .getColorAsync(!mainImage.includes('.') ? page404 : mainImage)
    .then((color) => {
      setColor(color.hex);
    });
  return (
    <>
      <PostListStyles onClick={() => requestHandleTeamInfo(idx)}>
        <PostItem>
          <PostImg
            style={{ backgroundColor: color }}
            src={!mainImage.includes('.') ? page404 : mainImage}
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
