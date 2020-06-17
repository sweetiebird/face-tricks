import React from 'react';

import { colors } from '../../constants';

import { propTypes, defaultProps } from './props';

import Button from './Button';


const InvertedButton = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
      iconColor={colors.primary}
      isInverted
    >
      {children}
    </Button>
  );
};

InvertedButton.propTypes = propTypes;

InvertedButton.defaultProps = defaultProps;


export default InvertedButton;
