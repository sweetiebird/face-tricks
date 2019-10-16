import React from 'react';
import { ActivityIndicator } from 'react-native';

import {
  DefaultText,
  FlexRow,
} from 'components';


const learningTextStyle = {
  marginTop: 10,
  marginRight: 8,
  textAlign: 'right',
};

const LearningTextLoader = () => {
  return (
    <FlexRow center>
      <DefaultText
        italic
        style={learningTextStyle}
      >
        Learning your face! This can take a minute.
      </DefaultText>

      <ActivityIndicator style={{ top: 4 }} />
    </FlexRow>
  );
};


export default LearningTextLoader;
