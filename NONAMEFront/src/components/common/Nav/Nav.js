import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavStyles, NavName } from './Nav.style';
import styled, { css } from 'styled-components';

const Nav = () => {
  const Nav = ({ navName, link }) => {
    const { pathname } = useLocation();
    // const active = 'Nav-Item-active';

    const NavItem = styled.div`
      font-size: 16px;
      font-weight: 500;
      width: 33.33%;
      justify-content: center;
      text-align: center;
      margin: auto;
      border-bottom: 1.5px solid rgb(207, 207, 207);
      font-weight: bold;

      ${pathname === link
        ? css`
            color: #3200bc;
            border-bottom: 2px solid #3200bc;
          `
        : null}
    `;

    return (
      <NavItem>
        <NavName>
          <Link to={link}>{navName}</Link>
        </NavName>
      </NavItem>
    );
  };

  return (
    <>
      <NavStyles>
        <Nav navName="홈" link={'/'} />
        <Nav navName="팀 만들기" link={'/make'} />
        <Nav navName="내 팀 보기" link={'/myTeam'} />
      </NavStyles>
    </>
  );
};

export default Nav;
