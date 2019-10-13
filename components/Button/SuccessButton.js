import React from 'react';

import { colors } from 'constants';

import Button from './Button';


const SuccessButton = ({ children, ...rest }) => {
  return (
    <Button
      {...rest}
      iconColor={colors.white}
      isSuccess
    >
      {children}
    </Button>
  );
};


export default SuccessButton;
