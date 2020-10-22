import React from 'react';
import { SliderStlyes, InnerImg } from './Slider.style';
const Slider = ({ imgList }) => {
  return (
    <>
      <SliderStlyes>
        <img src={imgList[0]} alt="" />
      </SliderStlyes>
    </>
  );
};

export default Slider;
