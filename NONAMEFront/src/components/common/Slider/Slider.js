import React from 'react';
import { SliderStlyes, InnerImg } from './Slider.style';
const Slider = ({ teamList, list }) => {
  return (
    <>
      <SliderStlyes>
        {teamList.map((data) => {
          const { mainImage } = data;
          return (
            <>
              <InnerImg src={mainImage} alt="" />
            </>
          );
        })}
      </SliderStlyes>
    </>
  );
};

export default Slider;
