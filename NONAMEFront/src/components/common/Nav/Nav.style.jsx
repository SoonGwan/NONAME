import styled, { css } from 'styled-components';

export const NavStyles = styled.div`
  width: 640px;
  height: 44px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 44px;
    margin: auto;
    padding: 0px 20px;
  }
`;

export const NavName = styled.div`
  margin-bottom: 5px;
  font-size: 14px;
`;
