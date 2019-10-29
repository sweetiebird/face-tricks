import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { colors } from 'constants';

import DefaultText from '../DefaultText';
import Button from './Button';


const LabeledCircleButton = ({ children, style, ...rest }) => (
  <View style={{ display: 'flex', width: 140, alignItems: 'center', ...style }}>
    <Button {...rest} style={{ marginBottom: 8 }} isLabeledCircle={true} />
    <DefaultText style={{ textAlign: 'center', color: colors.primary, fontFamily: 'roboto-medium' }}>
      {children}
    </DefaultText>
  </View>
);

LabeledCircleButton.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape(),
};

LabeledCircleButton.defaultProps = {
  style: {},
};


export default LabeledCircleButton;
