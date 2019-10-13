import React from 'react';
import PropTypes from 'prop-types';
import { ProgressBarAndroid, View } from 'react-native';

import { colors } from 'constants';


const Progress = (props) => {
  const {
    progress,
  } = props;

  return (
    <View style={{ width: '100%', padding: 10 }}>
      <ProgressBarAndroid
        color={colors.primary}
        progress={progress}
      />
    </View>
  );
};

Progress.propTypes = {
  progress: PropTypes.number,
};

Progress.defaultProps = {
  progress: 0,
};


export default Progress;
