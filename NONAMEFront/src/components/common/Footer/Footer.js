import React from 'react';
// import './Footer.scss';
import {
  FooterStyles,
  FooterArea,
  FooterTitle,
  FooterMade,
} from './Fotter.style';

const Footer = () => {
  return (
    <>
      <FooterStyles>
        <FooterArea>
          <FooterTitle>
            같이가 가치를 만들다 <br /> 서로의 특별한 팀을 .
          </FooterTitle>
          <FooterMade>무제 Made in 순관</FooterMade>
        </FooterArea>
      </FooterStyles>
    </>
  );
};

export default Footer;
