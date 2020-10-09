import styled from 'styled-components';

export const MainStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  justify-items: center;
  position: relative;
  width: 640px;
  height: 100%;
  background-color: #fff;
  margin: 20px auto auto auto;
  @media screen and (max-width: 480px) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    align-items: center;
    justify-items: center;
    position: relative;
    margin: 20px auto auto auto;
  }
`;

export const MainPinStyles = styled.div`
  width: 640px;
  height: 100%;
  padding: 20px 0px 0px 9px;
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.11;
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 17px 0px 0px 30px;

    margin: auto;
  }
`;
