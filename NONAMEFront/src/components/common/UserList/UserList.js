import React from 'react';
import {
  UserListStyle,
  UserWrap,
  User,
  Time,
  ReasonWrap,
  Reason,
} from './UserList.style';
import moment from 'moment';

const UserList = ({
  apply_team_idx,
  apply_time,
  idx,
  team_apply_reason,
  user_id,
  team_connect,
}) => {
  const time = moment(apply_time).format('YYYY-MM-DD HH:mm:ss');
  return (
    <>
      <UserListStyle key={idx}>
        <UserWrap>
          <User>
            신청자 : {user_id}({team_connect})
          </User>
          <Time>신청한 날짜 : {time}</Time>
        </UserWrap>
        <ReasonWrap>
          <Reason>{team_apply_reason}</Reason>
        </ReasonWrap>
      </UserListStyle>
    </>
  );
};

export default UserList;
