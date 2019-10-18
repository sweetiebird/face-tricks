import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, View } from 'react-native';

import { colors, icons } from 'constants';

import { TextWithTinyButton } from 'components';


const KeepLearningSection = (props) => {
  const {
    isFetching,
    onPress,
  } = props;

  const { width: size } = Dimensions.get('window');

  return (
    <View
      style={{
        paddingLeft: size * 0.1,
        paddingRight: size * 0.1,
      }}
    >
      <TextWithTinyButton
        buttonProps={{
          icon: isFetching ? icons.HOURGLASS : icons.CREATE,
          iconColor: colors.primary,
          isDisabled: isFetching,
          isPrimary: true,
          onPress,
        }}
        textProps={{
          italic: true,
          style: { marginRight: 8 }
        }}
      >
        Not quite right? Keep learning
      </TextWithTinyButton>
    </View>
  );
};

KeepLearningSection.propTypes = {
  isFetching: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
};

KeepLearningSection.defaultProps = {
  isFetching: false,
};


export default KeepLearningSection;
