import React from 'react';
import { SliderStlyes, InnerImg } from './Slider.style';
const Slider = ({ imgList }) => {
  const i = 0;
  console.log('이미지', { ...imgList[0] });
  return (
    <>
      <SliderStlyes>
        <img src={imgList[0]} alt="" />
      </SliderStlyes>
    </>
  );
};

export default Slider;
