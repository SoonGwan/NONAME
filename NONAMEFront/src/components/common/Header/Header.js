import React from 'react';
import './Header.scss';
import { RiSearchEyeFill, RiMenu2Fill } from 'react-icons/ri';
const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="Header-Menu">
          <RiMenu2Fill />
        </div>
        <div className="Header-Title">
          <span>무제</span> 프로젝트
        </div>
        <div className="Header-Search">
          <RiSearchEyeFill />
        </div>
      </div>
    </>
  );
};

export default Header;
