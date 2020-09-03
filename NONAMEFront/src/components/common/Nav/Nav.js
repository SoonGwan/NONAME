import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const Nav = ({ navName, link }) => {
    const { pathname } = useLocation();
    const active = 'Nav-Item-active';

    return (
      <div className={('Nav-Item', link === pathname ? active : 'Nav-Item')}>
        <div className="Nav-Item-Name">
          <Link to={link}>{navName}</Link>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="Nav">
        <Nav navName="홈" link={'/'} />
        <Nav navName="팀을 찾아요" link={'/find'} />
        <Nav navName="팀 만들기" link={'/make'} />
        <Nav navName="내 프로필" link={'/my'} />
      </div>
    </>
  );
};

export default Nav;
