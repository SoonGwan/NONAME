import React, { useState } from 'react';
import TeamInfoContainer from 'container/TeamListContainer/TeamInfoContainer';
import page404 from 'components/assets/img/page404.png';
import FastAverageColor from 'fast-average-color';
import TimeCounting from 'time-counting';
import moment from 'moment';

import {
  PostListStyles,
  PostImg,
  ImgLayer,
  ImgTitle,
  TitleDoing,
  TitleDoingText,
  UnderCardWrap,
  RightWrap,
  LeftWrap,
  TitleDoingTextSmall,
} from './PostList.style';
import Skeleton from 'react-loading-skeleton';
const PostList = ({
  idx,
  teamName,
  whoMade,
  mainImage,
  requestHandleTeamInfo,
  teamMakeTime,
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
        <ImgLayer></ImgLayer>

        <PostImg
          style={{ backgroundColor: color }}
          src={!mainImage.includes('.') ? page404 : mainImage}
          alt={mainImage}
        />
        <TitleDoing>
          <TitleDoingText>진행중</TitleDoingText>
        </TitleDoing>
        <ImgTitle>
          <div>{teamName}</div>
        </ImgTitle>
        <UnderCardWrap>
          <LeftWrap>
            <TitleDoingTextSmall>주인</TitleDoingTextSmall>
            {whoMade}
          </LeftWrap>
          <RightWrap>
            {TimeCounting(moment(teamMakeTime).format('YYYY-MM-DD HH:mm:ss'), {
              lang: 'ko',
            }) + ' 만들어짐'}
          </RightWrap>
        </UnderCardWrap>
      </PostListStyles>
    </>
  );
};

export default PostList;
