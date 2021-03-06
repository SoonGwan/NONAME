import styled from 'styled-components';
import { Input } from 'components/common/Input/Input';
import { Button } from 'components/common/Button/Button';

export const InputPostApply = styled(Input)`
  width: 100%;
  border: 1px solid #e7e8eb;
  background-color: #f6f6f6;
  height: 55px;
  border-radius: 6px;
  padding: 0px 10px;
`;

export const InputExp = styled.div`
  font-size: 14px;
  color: gray;
  margin-bottom: 10px;
`;

export const InputPhone = styled(InputExp)`
  margin-top: 20px;
`;

export const ApplyButton = styled(Button)`
  width: 100%;
  height: 55px;
  border: none;
  margin-top: 20px;
  border-radius: 6px;
`;
