import React from 'react';

import { colors } from 'constants';

import Button from './Button';


const PrimaryButton = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
      iconColor={colors.white}
      isPrimary
    >
      {children}
    </Button>
  );
};


export default PrimaryButton;
