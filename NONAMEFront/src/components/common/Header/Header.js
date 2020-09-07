import React from 'react';
import './Header.scss';
import { RiLoginBoxFill, RiMenu2Fill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

const Header = () => {
  let history = useHistory();
  return (
    <>
      <div className="Header">
        <div className="Header-Menu">
          <RiLoginBoxFill onClick={() => history.push('/login')} />
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
