import styled from 'styled-components';
import { Button } from 'components/common/Button/Button';
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
  /* background-color: red; */
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

export const NoExitTeam = styled.div`
  width: 640px;
  height: 100%;
  margin: auto;
  display: flex;
`;

export const NoTitle = styled.div`
  width: 100%;
  height: 350px;
  font-size: 36px;
  font-weight: bold;
  color: #ccc;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const MakeTeamTitle = styled.div`
  width: 100%;
  margin: auto;
`;

export const SmallExp = styled.div`
  color: #ccc;
  opacity: 0.7;
  font-size: 18px;
  font-weight: bold;
  width: 100%;
`;

export const ButtonWrapDM = styled.div`
  width: 100%;
  display: flex;
  height: 40px;
  justify-content: space-around;
`;

export const ModifyButton = styled(Button)`
  width: 240px;
  background-color: #f6f8fa;
  height: 100%;
  border: none;
  color: black;
  border-radius: 2px;
`;

export const DeleteButton = styled(Button)`
  width: 240px;
  height: 100%;
  border: none;
  background-color: rgb(229, 103, 99);
  color: white;
  border-radius: 2px;
`;

export const ApplyTeamList = styled.div`
  width: 100%;
  height: 400px;
  overflow-y: auto;
`;
