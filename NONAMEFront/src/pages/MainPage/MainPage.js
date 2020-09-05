import React from 'react';
import Template from 'components/common/Template/Template';
import Main from 'components/Main';
import TeamListContainer from 'container/TeamListContainer/TeamListContainer';

const MainPage = () => {
  return (
    <Template>
      <TeamListContainer />
    </Template>
  );
};

export default MainPage;
