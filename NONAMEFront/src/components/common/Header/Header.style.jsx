import styled from 'styled-components';

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 640px;
  height: 45px;
  margin: auto;
  @media screen and (max-width: 480px) {
    width: 100%;
    height: 45px;
    margin: auto;
    padding: 0px 20px;
  }
`;

export const HeaderMenu = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;
  & > * {
    width: 20px;
    height: 20px;
  }
`;

export const HeaderTitle = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translate(-50%);
`;

export const HeaderTitleItem = styled.span`
  font-weight: 600;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 1.1rem;
`;

export const HeaderSearch = styled.div`
  margin-top: auto;
  margin-bottom: auto;
  cursor: pointer;

  & > * {
    width: 20px;
    height: 20px;
  }
`;
