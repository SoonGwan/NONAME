import styled from 'styled-components';

export const SliderStlyes = styled.div`
  width: 640px;
  height: 220px;
  margin: auto;
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const InnerImg = styled.img`
  width: 640px;
  height: 100%;
  object-fit: contain;
`;
