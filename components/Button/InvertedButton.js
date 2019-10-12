import React from 'react';

import { colors } from 'constants';

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


export default InvertedButton;
