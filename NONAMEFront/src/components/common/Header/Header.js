import React from 'react';
import './Header.scss';
import { RiLoginBoxFill, RiMenu2Fill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="Header-Menu">
          <RiLoginBoxFill />
        </div>
        <div className="Header-Title">
          <span>무제</span> 프로젝트
        </div>
        <div className="Header-Search">
          <CgProfile />
        </div>
      </div>
    </>
  );
};

export default Header;
