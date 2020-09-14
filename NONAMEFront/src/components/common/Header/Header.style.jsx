import styled from 'styled-components';

export const HeaderStyles = styled.div`
  display: flex;
  justify-content: space-between;
  width: 640px;
  height: 45px;
  margin: auto;
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
