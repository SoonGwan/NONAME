import styled from 'styled-components';
import { Button } from 'components/common/Button/Button';

export const WriteStyles = styled.div`
  width: 640px;
  height: 100%;
  margin: auto;
`;

export const TeamNameTitle = styled.div``;

export const TeamName = styled.input`
  border: none;
  width: 240px;
  height: 50px;
`;

export const FileInput = styled.input`
  border: none;
  width: 240px;
  height: 50px;
`;

export const FileLabel = styled.label``;

export const MakeTeamButton = styled(Button)`
  width: 100%;
  height: 55px;
  border: none;
  background-color: #f6f8fa;
  margin: 20px 0px;
`;

export const ButtonWrap = styled.div`
  width: 100%;
  display: flex;
  height: 55px;
`;

export const ModifyButton = styled(Button)`
  width: 120px;
  background-color: #f6f8fa;
  height: 100%;
`;
