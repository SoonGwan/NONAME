import styled from 'styled-components';
import { Button } from 'components/common/Button/Button';
export const PostInfoStlyes = styled.div`
  width: 100%;
  height: 100%;
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 340px;

  @media screen and (min-width: 480px) {
    width: 100%;
    height: 200px;
  }
`;

export const TeamName = styled.div`
  width: 100%;
  word-break: break-word;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #ccc;
  font-size: 20px;
  font-weight: bold;
  margin-top: 14px;
`;

export const WhoMade = styled(TeamName)`
  margin-top: 4px;
  font-weight: 400;
  font-size: 16px;
`;

export const ContentWrap = styled.div`
  width: 100%;
  height: 400px;
  overflow-y: auto;
  margin-top: 14px;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;

export const DefaultButtonSetting = styled.button`
  width: 160px;
  height: 40px;
  background-color: red;
  border: none;
`;

export const ApplyButton = styled(DefaultButtonSetting)`
  background-color: blue;
`;

export const CancelButton = styled(DefaultButtonSetting)`
  background-color: #ccc;
`;

export const ApplyModalButton = styled(Button)`
  width: 100%;
  height: 55px;
  border: none;
  background-color: #f6f8fa;
`;
