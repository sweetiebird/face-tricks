import React from 'react';

import { DefaultText } from 'components';

import { HistoryScrollViewStyled } from './styled';


const HistoryScreen = () => {
  return (
    <HistoryScrollViewStyled>
      <DefaultText>History</DefaultText>
    </HistoryScrollViewStyled>
  );
};

HistoryScreen.navigationOptions = {
  title: 'History',
};


export default HistoryScreen;
