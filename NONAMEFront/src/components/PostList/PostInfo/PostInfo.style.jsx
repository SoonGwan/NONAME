import styled from 'styled-components';

export const PostInfoStlyes = styled.div`
  width: 100%;
  height: 100%;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 340px;
`;

export const TeamName = styled.div`
  width: 100%;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #ccc;
  font-size: 16px;
  font-weight: bold;
  margin-top: 14px;
`;

export const WhoMade = styled(TeamName)`
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
`;
