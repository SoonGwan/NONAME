import styled, { css } from 'styled-components';

export const NavStyles = styled.div`
  width: 640px;
  height: 44px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

export const NavName = styled.div`
  margin-bottom: 5px;
`;

export const NavItem = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 25%;
  justify-content: center;
  text-align: center;
  margin: auto;
  border-bottom: 1.5px solid rgb(207, 207, 207);
  ${(pathname, link) =>
    pathname === link
      ? css`
          color: #3200bc;
          border-bottom: 2px solid #3200bc;
        `
      : null}
`;
